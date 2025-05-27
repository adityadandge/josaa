import json
from collections import defaultdict
from pathlib import Path

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.common.exceptions import StaleElementReferenceException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait

driver = webdriver.Chrome()
driver.get(
    "https://josaa.admissions.nic.in/applicant/seatmatrix/openingclosingrankarchieve.aspx"
)


def select(_id: str, value: str):
    successful = False

    while not successful:
        try:
            div = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.ID, _id))
            )

            chosen_single_link = WebDriverWait(div, 10).until(
                EC.element_to_be_clickable((By.CSS_SELECTOR, "a.chosen-single"))
            )
            chosen_single_link.click()

            search_input = WebDriverWait(div, 10).until(
                EC.visibility_of_element_located(
                    (By.CSS_SELECTOR, "div.chosen-search input[type='text']")
                )
            )
            search_input.send_keys(value)

            target_list_item = WebDriverWait(div, 10).until(
                EC.element_to_be_clickable(
                    (
                        By.XPATH,
                        f".//ul[@class='chosen-results']/li[contains(., '{value}')]",
                    )
                )
            )
            target_list_item.click()

            successful = True

        except StaleElementReferenceException:
            driver.implicitly_wait(5)


options = defaultdict(set)

for round in range(1, 6):
    select("ctl00_ContentPlaceHolder1_ddlYear_chosen", "2024")
    select("ctl00_ContentPlaceHolder1_ddlroundno_chosen", str(round))
    select("ctl00_ContentPlaceHolder1_ddlInstype_chosen", "ALL")
    select("ctl00_ContentPlaceHolder1_ddlInstitute_chosen", "ALL")
    select("ctl00_ContentPlaceHolder1_ddlBranch_chosen", "ALL")
    select("ctl00_ContentPlaceHolder1_ddlSeatType_chosen", "ALL")

    (
        WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.ID, "ctl00_ContentPlaceHolder1_btnSubmit"))
        )
    ).click()

    html_content = (
        WebDriverWait(driver, 10)
        .until(
            EC.presence_of_element_located(
                (By.ID, "ctl00_ContentPlaceHolder1_GridView1")
            )
        )
        .get_attribute("innerHTML")
    )

    soup = BeautifulSoup(html_content, "html.parser")
    rows = soup.find_all("tr", recursive=True)

    data = []

    for row in rows:
        if row.find("th"):
            continue

        cells = row.find_all("td", recursive=False)

        row_data = {}

        try:
            row_data["institute"] = cells[0].get_text(strip=True)
            if not row_data["institute"]:
                continue

            branch_span = cells[1].find("span", id=lambda x: x and "lblBranch" in x)
            row_data["branch"] = branch_span.get_text(strip=True)
            options["branch"].add(row_data["branch"])

            quota_span = cells[2].find("span", id=lambda x: x and "lblQuota" in x)
            row_data["quota"] = quota_span.get_text(strip=True)
            options["quota"].add(row_data["quota"])

            category_span = cells[3].find("span", id=lambda x: x and "lblCategory" in x)
            row_data["category"] = category_span.get_text(strip=True)
            options["category"].add(row_data["category"])

            gender_span = cells[4].find("span", id=lambda x: x and "lblGender" in x)
            row_data["gender"] = gender_span.get_text(strip=True)
            options["gender"].add(row_data["gender"])

            open_rank_span = cells[5].find(
                "span", id=lambda x: x and "lblOpenRank" in x
            )
            row_data["opening"] = open_rank_span.get_text(strip=True)

            close_rank_span = cells[6].find(
                "span", id=lambda x: x and "lblCloseRank" in x
            )
            row_data["closing"] = close_rank_span.get_text(strip=True)

        except Exception:
            pass

        data.append(row_data)

    with (
        Path(__file__).parent
        / "opening-and-closing-ranks"
        / "2024"
        / f"round-{round:0>2}"
    ).open("w") as f:
        json.dump(data, f)

    driver.implicitly_wait(10)

driver.close()

options = {k: sorted(v) for k, v in options.items()}
with (Path(__file__).parent / "opening-and-closing-ranks" / "options").open("w") as f:
    json.dump(options, f)
