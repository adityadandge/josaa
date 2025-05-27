"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type ColumnDef } from "@tanstack/react-table";
import { ChevronsUpDown, Funnel } from "lucide-react";
import React from "react";

export type Column = {
  institute: string;
  branch: string;
  category: string;
  quota: string;
  gender: string;
  opening: string;
  closing: string;
};

export const columns: ColumnDef<Column>[] = [
  {
    accessorKey: "institute",
    header: "Institute",
  },
  {
    accessorKey: "branch",
    header: ({ column }) => {
      const options = [
        "Aeronautical Engineering (4 Years, Bachelor of Technology)",
        "Aerospace Engineering (4 Years, Bachelor of Technology)",
        "Aerospace Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Agricultural Engineering (4 Years, Bachelor of Technology)",
        "Agricultural and Food Engineering (4 Years, Bachelor of Technology)",
        "Applied Geology (4 Years, Bachelor of Science)",
        "Applied Geology (5 Years, Integrated Master of Technology)",
        "Applied Geophysics (5 Years, Integrated Master of Technology)",
        "Architecture  (5 Years, Bachelor of Architecture)",
        "Architecture and Planning (5 Years, Bachelor of Architecture)",
        "Artificial Intelligence (4 Years, Bachelor of Technology)",
        "Artificial Intelligence (5 Years, Integrated B. Tech. and M. Tech.)",
        "Artificial Intelligence and Data Analytics (4 Years, Bachelor of Technology)",
        "Artificial Intelligence and Data Engineering (4 Years, Bachelor of Technology)",
        "Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)",
        "Artificial Intelligence and Machine Learning (4 Years, Bachelor of Technology)",
        "B. Tech in CE. - M. Tech.  in Geotechnical Engineering (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
        "B. Tech in CE. - M. Tech.  in Structural Engineering (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
        "B. Tech. (CSE) and M.Tech in CSE (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
        "B. Tech. (ECE) -M. Tech. in VLSI (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
        "B. Tech. (EEE)-M. Tech. in (Power &. Control) (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
        "B. Tech. (ME) - M. Tech. in Mechatronics (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
        "B. Tech. (Mathematics & Computing) M. Tech. in (Mathematics & Computing) (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
        "B.Tech (Artificial Intelligence and Data Science) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
        "B.Tech (Chemical Engineering) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
        "B.Tech (Chemical Science and Technology) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
        "B.Tech (Civil Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
        "B.Tech (Computer Science and Engineering) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
        "B.Tech (Electrical and Electronics Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
        "B.Tech (Electronics and Communication Engineering) - MBA in Hospital and Healthcare Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
        "B.Tech (Engineering Physics) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
        "B.Tech (Mathematics and Computing) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
        "B.Tech (Mechanical Engineering) - MBA (IIM Mumbai) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
        "B.Tech (Metallurgical and Materials Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
        "B.Tech in Artificial Intelligenece and Data Science (Transportation and Logistics) (4 Years, Bachelor of Technology)",
        "B.Tech in Aviation Engineering (4 Years, Bachelor of Technology)",
        "B.Tech in Civil Engineering (Rail Engineering) (4 Years, Bachelor of Technology)",
        "B.Tech in Electrical Engineering ( Rail  Engineering) (4 Years, Bachelor of Technology)",
        "B.Tech in Electronics & Communication Engineering (Rail Engineering) (4 Years, Bachelor of Technology)",
        "B.Tech in General Engineering (4 Years, Bachelor of Technology)",
        "B.Tech in Materials Science and Engineering (4 Years, Bachelor of Technology)",
        "B.Tech in Mathematics and Computing (4 Years, Bachelor of Technology)",
        "B.Tech in Mechanical Engineering ( Rail  Engineering) (4 Years, Bachelor of Technology)",
        "B.Tech in Mechanical Engineering and M.Tech in AI and Robotics (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
        "B.Tech in Microelectronics & VLSI (4 Years, Bachelor of Technology)",
        "B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "B.Tech. in Electronics and Communication Engineering and M.Tech. in VLSI Design (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "BS in Chemical Sciences (4 Years, Bachelor of Science)",
        "BS in Economics with MBA (IIM Bodh Gaya) (5 Years, Bachelor of Science and MBA (Dual Degree))",
        "BS in Mathematics (4 Years, Bachelor of Science)",
        "Bachelor of Design (4 Years, Bachelor of Design)",
        "Bio Engineering (4 Years, Bachelor of Technology)",
        "Bio Medical Engineering (4 Years, Bachelor of Technology)",
        "Bio Technology (4 Years, Bachelor of Technology)",
        "Biochemical Engineering with M.Tech. in Biochemical Engineering and Biotechnology (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Bioengineering with M.Tech in Biomedical Technology (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Biological Engineering (4 Years, Bachelor of Technology)",
        "Biological Science (4 Years, Bachelor of Science)",
        "Biological Sciences and Bioengineering (4 Years, Bachelor of Technology)",
        "Biomedical Engineering (4 Years, Bachelor of Technology)",
        "Biosciences and Bioengineering (4 Years, Bachelor of Technology)",
        "Biotechnology (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)",
        "Biotechnology and Bioinformatics (4 Years, Bachelor of Technology)",
        "CSE ( Data Science & Analytics) (4 Years, Bachelor of Technology)",
        "Carpet  and Textile Technology (4 Years, Bachelor of Technology)",
        "Ceramic Engineering (4 Years, Bachelor of Technology)",
        "Ceramic Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Ceramic Engineering and M.Tech Industrial Ceramic (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Chemical Engineering (4 Years, Bachelor of Technology)",
        "Chemical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Chemical Engineering (5 Years, Integrated Masters in Technology)",
        "Chemical Science and Technology (4 Years, Bachelor of Technology)",
        "Chemical Sciences (5 Years, Bachelor of Science and Master of Science (Dual Degree))",
        "Chemical Technology (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Chemical and Biochemical Engineering (4 Years, Bachelor of Technology)",
        "Chemistry (4 Years, Bachelor of Science)",
        "Chemistry (5 Years, Bachelor of Science and Master of Science (Dual Degree))",
        "Chemistry (5 Years, Integrated Master of Science)",
        "Chemistry with Specialization (4 Years, Bachelor of Science)",
        "Civil Engineering (4 Years, Bachelor of Technology)",
        "Civil Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Civil Engineering with Specialization in Construction Technology and Management (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Civil and Environmental Engineering (4 Years, Bachelor of Technology)",
        "Civil and Infrastructure Engineering (4 Years, Bachelor of Technology)",
        "Computational Engineering (4 Years, Bachelor of Technology)",
        "Computational Mathematics (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Computational and Data Science (4 Years, Bachelor of Technology)",
        "Computer Engineering (4 Years, Bachelor of Technology)",
        "Computer Science (4 Years, Bachelor of Technology)",
        "Computer Science Engineering (Artificial Intelligence) (4 Years, B. Tech / B. Tech (Hons.))",
        "Computer Science Engineering (Artificial lntelligence and Machine Learning) (4 Years, Bachelor of Technology)",
        "Computer Science Engineering (Data Science and Analytics) (4 Years, Bachelor of Technology)",
        "Computer Science Engineering (Data Science) (4 Years, B. Tech / B. Tech (Hons.))",
        "Computer Science Engineering (Human Computer lnteraction and Gaming Technology) (4 Years, Bachelor of Technology)",
        "Computer Science and Artificial Intelligence (4 Years, Bachelor of Technology)",
        "Computer Science and Business (4 Years, Bachelor of Technology)",
        "Computer Science and Engineering ( Artificial Intelligence & Data Science) (4 Years, Bachelor of Technology)",
        "Computer Science and Engineering (4 Years, Bachelor of Technology)",
        "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Computer Science and Engineering (Artificial Intelligence) (4 Years, Bachelor of Technology)",
        "Computer Science and Engineering (Cyber Physical System) (4 Years, Bachelor of Technology)",
        "Computer Science and Engineering (Cyber Security) (4 Years, Bachelor of Technology)",
        "Computer Science and Engineering (Data Science) (4 Years, Bachelor of Technology)",
        "Computer Science and Engineering (with Specialization of Data Science and Artificial Intelligence)\n (4 Years, B. Tech / B. Tech (Hons.))",
        "Computer Science and Engineering with Major in Artificial Intelligence (4 Years, Bachelor of Technology)",
        "Computer Science and Engineering with Specialization in Cyber Security (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Computer Science and Engineering with Specialization in Data Science (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Computer Science and Engineering with specialization in Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)",
        "Computer Science and Engineering with specialization in Cyber Security\n (4 Years, Bachelor of Technology)",
        "Dairy Engineering (4 Years, Bachelor of Technology)",
        "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)",
        "Data Science and Engineering (4 Years, Bachelor of Technology)",
        "Earth Sciences (4 Years, Bachelor of Science)",
        "Economics (4 Years, Bachelor of Science)",
        "Economics (5 Years, Bachelor of Science and Master of Science (Dual Degree))",
        "Electrical Engineering (4 Years, Bachelor of Technology)",
        "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Electrical Engineering (IC Design and Technology) (4 Years, Bachelor of Technology)",
        "Electrical Engineering (Power and Automation) (4 Years, Bachelor of Technology)",
        "Electrical Engineering with M.Tech. in Power Electronics (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Electrical Engineering with Specialization In Power System Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Electrical and Electronics Engineering (4 Years, Bachelor of Technology)",
        "Electronic Engineering (4 Years, Bachelor of Technology)",
        "Electronics Engineering (4 Years, Bachelor of Technology)",
        "Electronics Engineering (VLSI Design and Technology) (4 Years, Bachelor of Technology)",
        "Electronics and Communication Engineering (4 Years, Bachelor of Technology)",
        "Electronics and Communication Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Electronics and Communication Engineering (Avionics) (4 Years, Bachelor of Technology)",
        "Electronics and Communication Engineering (Internet of Things) (4 Years, Bachelor of Technology)",
        "Electronics and Communication Engineering (VLSI Design and Technology) (4 Years, Bachelor of Technology)",
        "Electronics and Communication Engineering (with Specialization of Embedded Systems and Internet of Things)\n (4 Years, B. Tech / B. Tech (Hons.))",
        "Electronics and Communication Engineering with Specialization in Microelectronics and VLSI System Design (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Electronics and Communication Engineering with specialization in Design and Manufacturing (4 Years, Bachelor of Technology)",
        "Electronics and Communication Engineering with specialization in VLSI and Embedded Systems (4 Years, Bachelor of Technology)",
        "Electronics and Electrical Communication Engineering (4 Years, Bachelor of Technology)",
        "Electronics and Electrical Engineering (4 Years, Bachelor of Technology)",
        "Electronics and Instrumentation Engineering (4 Years, Bachelor of Technology)",
        "Electronics and Telecommunication Engineering (4 Years, Bachelor of Technology)",
        "Electronics and VLSI Engineering (4 Years, Bachelor of Technology)",
        "Energy Engineering (4 Years, Bachelor of Technology)",
        "Engineering Design (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Engineering Physics (4 Years, Bachelor of Technology)",
        "Engineering Physics (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Engineering Science (4 Years, Bachelor of Technology)",
        "Engineering and Computational Mechanics (4 Years, Bachelor of Technology)",
        "Environmental Engineering (4 Years, Bachelor of Technology)",
        "Environmental Science and Engineering (4 Years, Bachelor of Technology)",
        "Exploration Geophysics (4 Years, Bachelor of Science)",
        "Fashion and Apparel Engineering (4 Years, Bachelor of Technology)",
        "Food Engineering  and Technology (4 Years, Bachelor of Technology)",
        "Food Process Engineering (4 Years, Bachelor of Technology)",
        "Food Technology (4 Years, Bachelor of Technology)",
        "Food Technology and Management (4 Years, Bachelor of Technology)",
        "Geological Technology (5 Years, Integrated Master of Technology)",
        "Geophysical Technology (5 Years, Integrated Master of Technology)",
        "Handloom and Textile Technology (4 Years, Bachelor of Technology)",
        "Industrial Chemistry (4 Years, Bachelor of Technology)",
        "Industrial Chemistry (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Industrial Design (4 Years, Bachelor of Technology)",
        "Industrial Engineering and Operations Research (4 Years, Bachelor of Technology)",
        "Industrial Internet of Things (4 Years, Bachelor of Technology)",
        "Industrial and Production Engineering (4 Years, Bachelor of Technology)",
        "Industrial and Systems Engineering (4 Years, Bachelor of Technology)",
        "Information Technology (4 Years, Bachelor of Technology)",
        "Information Technology-Business Informatics (4 Years, Bachelor of Technology)",
        "Instrumentation Engineering (4 Years, Bachelor of Technology)",
        "Instrumentation and Control Engineering (4 Years, Bachelor of Technology)",
        "Integrated B. Tech. - M. Tech in Civil Engineering (5 Years, Integrated B. Tech. and M. Tech.)",
        "Integrated B. Tech. - M. Tech in Computer Science & Engineering (5 Years, Integrated B. Tech. and M. Tech.)",
        "Integrated B. Tech. - M. Tech in Electrical Engineering (5 Years, Integrated B. Tech. and M. Tech.)",
        "Integrated B. Tech.(IT) and M. Tech (IT) (5 Years, Integrated B. Tech. and M. Tech.)",
        "Integrated B. Tech.(IT) and MBA (5 Years, Integrated B. Tech. and MBA)",
        "Integrated B. Tech.- M. Tech in Metallurgical & Materials Engineering (5 Years, Integrated B. Tech. and M. Tech.)",
        "Integrated Circuit Design & Technology (4 Years, Bachelor of Technology)",
        "Interdisciplinary Sciences (5 Years, Bachelor of Science and Master of Science (Dual Degree))",
        "Life Science (5 Years, Integrated Master of Science)",
        "Manufacturing Science and Engineering (4 Years, Bachelor of Technology)",
        "Material Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Materials Engineering (4 Years, Bachelor of Technology)",
        "Materials Engineering (5 Years, Integrated Master of Technology)",
        "Materials Science and Engineering (4 Years, Bachelor of Technology)",
        "Materials Science and Metallurgical Engineering (4 Years, Bachelor of Technology)",
        "Materials Science and Technology (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Mathematics & Computing (5 Years, Bachelor of Science and Master of Science (Dual Degree))",
        "Mathematics (5 Years, Integrated Master of Science)",
        "Mathematics and Computing (4 Years, Bachelor of Science)",
        "Mathematics and Computing (4 Years, Bachelor of Technology)",
        "Mathematics and Computing (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Mathematics and Computing (5 Years, Integrated Master of Science)",
        "Mathematics and Computing Technology (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Mathematics and Data Science (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Mathematics and Scientific Computing (4 Years, Bachelor of Science)",
        "Mathematics and Scientific Computing (4 Years, Bachelor of Technology)",
        "Mechanical Engineering (4 Years, Bachelor of Technology)",
        "Mechanical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Mechanical Engineering with Specialization in Manufacturing and Industrial Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Mechanical Engineering with specialization in Design and Manufacturing (4 Years, Bachelor of Technology)",
        "Mechatronics Engineering (4 Years, Bachelor of Technology)",
        "Mechatronics and Automation Engineering (4 Years, Bachelor of Technology)",
        "Metallurgical Engineering (4 Years, Bachelor of Technology)",
        "Metallurgical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Metallurgical Engineering and Materials Science (4 Years, Bachelor of Technology)",
        "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)",
        "Metallurgical and Materials Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Metallurgy and Materials Engineering (4 Years, Bachelor of Technology)",
        "Microelectronics & VLSI Engineering (4 Years, Bachelor of Technology)",
        "Mineral and Metallurgical Engineering (4 Years, Bachelor of Technology)",
        "Mining Engineering  (4 Years, Bachelor of Technology)",
        "Mining Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Mining Machinery Engineering (4 Years, Bachelor of Technology)",
        "Naval Architecture and Ocean Engineering (4 Years, Bachelor of Technology)",
        "Ocean Engineering and Naval Architecture (4 Years, Bachelor of Technology)",
        "Petroleum Engineering (4 Years, Bachelor of Technology)",
        "Pharmaceutical Engineering & Technology (4 Years, Bachelor of Technology)",
        "Pharmaceutical Engineering & Technology (5 Years, Bachelor and Master of Technology (Dual Degree))",
        "Physics (4 Years, Bachelor of Science)",
        "Physics (5 Years, Bachelor of Science and Master of Science (Dual Degree))",
        "Physics (5 Years, Integrated Master of Science)",
        "Physics with Specialization (4 Years, Bachelor of Science)",
        "Planning (4 Years, Bachelor of Planning)",
        "Printing and Packaging Technology (4 Years, Bachelor of Technology)",
        "Production Engineering (4 Years, Bachelor of Technology)",
        "Production and Industrial Engineering (4 Years, Bachelor of Technology)",
        "Quantitative Economics & Data Science (5 Years, Integrated Master of Science)",
        "ROBOTICS & AUTOMATION (4 Years, Bachelor of Technology)",
        "SUSTAINABLE ENERGY TECHNOLOGIES (4 Years, Bachelor of Technology)",
        "Smart Manufacturing (4 Years, Bachelor of Technology)",
        "Space Sciences and Engineering (4 Years, Bachelor of Technology)",
        "Statistics and Data Science (4 Years, Bachelor of Science)",
        "Textile Technology (4 Years, Bachelor of Technology)",
        "VLSI Design and Technology (4 Years, Bachelor of Technology)",
      ];
      const filterValue: string[] = (column.getFilterValue() as string[]) ?? [];
      const [search, setSearch] = React.useState<string>("");

      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="cursor-pointer">
              Branch
              <Funnel className="ml-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 space-y-2">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search branch..."
            ></Input>
            <ScrollArea className="h-96 p-2">
              <div className="flex flex-col gap-2">
                {(search.length === 0
                  ? options
                  : options.filter((value) =>
                      value.toLowerCase().includes(search)
                    )
                ).map((value) => (
                  <div className="flex gap-2">
                    <Checkbox
                      id={value}
                      checked={filterValue.includes(value)}
                      onCheckedChange={(checked) =>
                        column.setFilterValue(
                          checked
                            ? [...new Set([...filterValue, value])]
                            : filterValue.filter((_value) => _value !== value)
                        )
                      }
                    />
                    <Label htmlFor={value}>{value}</Label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </PopoverContent>
        </Popover>
      );
    },
    filterFn: (row: any, _: any, filterValue: string[]) => {
      if (filterValue.length === 0) return true;

      const branch = row.original.branch;
      return filterValue.includes(branch);
    },
  },
  {
    accessorKey: "quota",
    header: ({ column }) => {
      const options = ["AI", "GO", "HS", "JK", "LA", "OS"];
      const filterValue: string[] = (column.getFilterValue() as string[]) ?? [];

      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="cursor-pointer">
              Quota
              <Funnel className="ml-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-32">
            <div className="flex flex-col gap-2">
              {options.map((value) => (
                <div className="flex gap-2">
                  <Checkbox
                    id={value}
                    checked={filterValue.includes(value)}
                    onCheckedChange={(checked) =>
                      column.setFilterValue(
                        checked
                          ? [...new Set([...filterValue, value])]
                          : filterValue.filter((_value) => _value !== value)
                      )
                    }
                  />
                  <Label htmlFor={value}>{value}</Label>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      );
    },
    filterFn: (row: any, _: any, filterValue: string[]) => {
      if (filterValue.length === 0) return true;

      const quota = row.original.quota;
      return filterValue.includes(quota);
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      const options = [
        "EWS",
        "EWS (PwD)",
        "OBC-NCL",
        "OBC-NCL (PwD)",
        "OPEN",
        "OPEN (PwD)",
        "SC",
        "SC (PwD)",
        "ST",
        "ST (PwD)",
      ];
      const filterValue: string[] = (column.getFilterValue() as string[]) ?? [];

      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="cursor-pointer">
              Category
              <Funnel className="ml-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48">
            <div className="flex flex-col gap-2">
              {options.map((value) => (
                <div className="flex gap-2">
                  <Checkbox
                    id={value}
                    checked={filterValue.includes(value)}
                    onCheckedChange={(checked) =>
                      column.setFilterValue(
                        checked
                          ? [...new Set([...filterValue, value])]
                          : filterValue.filter((_value) => _value !== value)
                      )
                    }
                  />
                  <Label htmlFor={value}>{value}</Label>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      );
    },
    filterFn: (row: any, _: any, filterValue: string[]) => {
      if (filterValue.length === 0) return true;

      const category = row.original.category;
      return filterValue.includes(category);
    },
  },
  {
    accessorKey: "gender",
    header: ({ column }) => {
      const options = [
        "Female-only (including Supernumerary)",
        "Gender-Neutral",
      ];
      const filterValue: string[] = (column.getFilterValue() as string[]) ?? [];

      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="cursor-pointer">
              Gender
              <Funnel className="ml-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="flex flex-col gap-2">
              {options.map((value) => (
                <div className="flex gap-2">
                  <Checkbox
                    id={value}
                    checked={filterValue.includes(value)}
                    onCheckedChange={(checked) =>
                      column.setFilterValue(
                        checked
                          ? [...new Set([...filterValue, value])]
                          : filterValue.filter((_value) => _value !== value)
                      )
                    }
                  />
                  <Label htmlFor={value}>{value}</Label>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      );
    },
    filterFn: (row: any, _: any, filterValue: string[]) => {
      if (filterValue.length === 0) return true;

      const gender = row.original.gender;
      return filterValue.includes(gender);
    },
  },
  {
    accessorKey: "opening",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Opening Rank
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "closing",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Closing Rank
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
