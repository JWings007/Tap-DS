"use client";
import { useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChartBarIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

interface Course {
  _id: string;
  course_title: string;
  course_icon: React.ReactNode;
}

interface Page {
  label: string;
  value: string;
}

const pages: Page[] = [
  { label: "Home", value: "/" },
  { label: "Courses", value: "/course" },
  { label: "Student Reviews", value: "/student-reviews" },
  { label: "Hire From Us", value: "/hire-from-us" },
  { label: "Contact Us", value: "/contact-us" },
  { label: "Sign Up", value: "http://tai.thetapacademy.com/login" },
];

// Temporary courses data until the import is fixed
const courses: Course[] = [
  { _id: "1", course_title: "Data Science", course_icon: <ChartBarIcon className="w-6 h-6" /> },
  { _id: "2", course_title: "Machine Learning", course_icon: <TrophyIcon className="w-6 h-6" /> },
  { _id: "3", course_title: "Deep Learning", course_icon: <UserGroupIcon className="w-6 h-6" /> },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = `/${usePathname().split("/")[1]}`;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false);
  const courseMenuRef = useRef<HTMLDivElement>(null);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseOverlay = (event: React.MouseEvent) => {
    if (courseMenuRef.current && !courseMenuRef.current.contains(event.target as Node)) {
      setCourseOpen(false);
    }
  };

  const hideFooter = pathname?.startsWith("/gen-ai-workshop");
  if (hideFooter) return null;

  return (
    <nav className="fixed top-0 bg-white shadow-sm z-50 w-full">
      {courseOpen && (
        <div className="w-screen h-screen bg-black/50 backdrop-blur-sm absolute top-0 left-0 z-50" onClick={(event: React.MouseEvent) => handleCloseOverlay(event)}>
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 mt-2 w-[90vw] rounded-md shadow-lg bg-white h-40 z-50`}
            ref={courseMenuRef}
          >
            <div className="flex justify-between items-center pt-[0.42rem] pl-[3.2rem] pr-[4.2rem]">
              <div className="">
                <img src="/svg/logo.svg" alt="logo" className="w-28 h-7" />
              </div>
              <div>
                <button
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 bg-[#2091d0] text-white rounded-md hover:text-white cursor-pointer`}
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center px-[4.2rem] py-5">
              <div className="flex items-center gap-2">
                {courses.map((course) => (
                  <button
                    key={course._id}
                    className="flex items-center gap-2 text-sm font-light bg-gray-100 rounded-md px-5 py-3 cursor-pointer hover:font-medium"
                  >
                    {course.course_icon}
                    <span className="">{course.course_title}</span>
                  </button>
                ))}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
      <div className="px-4 lg:px-32">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img src="/svg/logo.svg" alt="logo" className="w-28 h-7" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {pages.map((page) => (
              <div key={page.value} className="relative">
                {page.label !== "Courses" ? (
                  <button
                    className={`text-gray-700 hover:text-[#2091d0] px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      page.label === "Sign Up"
                        ? "bg-[#2091d0] text-white rounded-md hover:text-white cursor-pointer"
                        : ""
                    } ${pathname === page.value ? "text-[#2091d0]" : ""}`}
                  >
                    {page.label}
                  </button>
                ) : (
                    <button
                      onClick={() => setCourseOpen(!courseOpen)}
                      className={`flex items-center gap-2 text-gray-700 hover:text-[#2091d0] px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        pathname === page.value ? "text-[#d06c20]" : ""
                      }`}
                    >
                      <span>{page.label}</span>
                      <ChevronDownIcon className="w-4 h-4" />
                    </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#2091d0] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {pages.map((page) => (
              <div key={page.value}>
                {page.value !== "/course" ? (
                  <button
                    onClick={() => {
                      router.push(page.value);
                      handleCloseMenu();
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                      pathname === page.value
                        ? "text-[#2091d0] bg-gray-50"
                        : "text-gray-700 hover:text-[#2091d0] hover:bg-gray-50"
                    }`}
                  >
                    {page.label}
                  </button>
                ) : (
                  <div>
                    <button
                      onClick={() => setMobileCourseOpen(!mobileCourseOpen)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium ${
                        pathname === page.value
                          ? "text-[#2091d0] bg-gray-50"
                          : "text-gray-700 hover:text-[#2091d0] hover:bg-gray-50"
                      }`}
                    >
                      {page.label}
                      {mobileCourseOpen ? (
                        <ChevronUpIcon className="w-4 h-4" />
                      ) : (
                        <ChevronDownIcon className="w-4 h-4" />
                      )}
                    </button>
                    {mobileCourseOpen && (
                      <div className="pl-4">
                        {courses.map((course) => (
                          <button
                            key={course._id}
                            onClick={() => {
                              router.push(page.value + "/" + course._id);
                              handleCloseMenu();
                              setMobileCourseOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#2091d0] hover:bg-gray-50"
                          >
                            {course.course_title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
