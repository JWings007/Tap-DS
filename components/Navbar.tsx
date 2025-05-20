'use client';
import { MouseEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

interface Course {
  _id: string;
  course_title: string;
}

interface Page {
  label: string;
  value: string;
}

const pages: Page[] = [
  { label: 'Home', value: '/' },
  { label: 'Courses', value: '/course' },
  { label: 'Student Reviews', value: '/student-reviews' },
  { label: 'Hire From Us', value: '/hire-from-us' },
  { label: 'Contact Us', value: '/contact-us' },
  {label: 'Sign Up', value: 'http://tai.thetapacademy.com/login'}
];

// Temporary courses data until the import is fixed
const courses: Course[] = [
  { _id: '1', course_title: 'Data Science' },
  { _id: '2', course_title: 'Machine Learning' },
  { _id: '3', course_title: 'Deep Learning' },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = `/${usePathname().split('/')[1]}`;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hideFooter = pathname?.startsWith('/gen-ai-workshop');
  if (hideFooter) return null;

  return (
    <nav className="fixed top-0 bg-white shadow-sm z-50 w-full">
      <div className="px-32">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img src="/svg/logo.svg" alt="logo" className="w-40 h-10" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {pages.map((page) => (
              <div key={page.value} className="relative">
                {page.value !== '/course' ? (
                  <button
                    onClick={() => router.push(page.value)}
                    className={`text-gray-700 hover:text-[#2091d0] px-3 py-2 text-sm font-medium transition-colors duration-200 ${page.label === 'Sign Up' ? 'bg-[#2091d0] text-white rounded-md hover:text-white cursor-pointer' : ''} ${
                      pathname === page.value ? 'text-[#2091d0]' : ''
                    }`}
                  >
                    {page.label}
                  </button>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => setCourseOpen(!courseOpen)}
                      className={`flex items-center text-gray-700 hover:text-[#2091d0] px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        pathname === page.value ? 'text-[#2091d0]' : ''
                      }`}
                    >
                      {page.label}
                      {courseOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </button>
                    {courseOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                        onMouseLeave={() => setCourseOpen(false)}
                      >
                        <div className="py-1">
                          {courses.map((course) => (
                            <button
                              key={course._id}
                              onClick={() => {
                                setCourseOpen(false);
                                router.push(page.value + '/' + course._id);
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {course.course_title}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
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
                {page.value !== '/course' ? (
                  <button
                    onClick={() => {
                      router.push(page.value);
                      handleCloseMenu();
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                      pathname === page.value
                        ? 'text-[#2091d0] bg-gray-50'
                        : 'text-gray-700 hover:text-[#2091d0] hover:bg-gray-50'
                    }`}
                  >
                    {page.label}
                  </button>
                ) : (
                  <div>
                    <button
                      onClick={() => setCourseOpen(!courseOpen)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium ${
                        pathname === page.value
                          ? 'text-[#2091d0] bg-gray-50'
                          : 'text-gray-700 hover:text-[#2091d0] hover:bg-gray-50'
                      }`}
                    >
                      {page.label}
                      {courseOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </button>
                    {courseOpen && (
                      <div className="pl-4">
                        {courses.map((course) => (
                          <button
                            key={course._id}
                            onClick={() => {
                              router.push(page.value + '/' + course._id);
                              handleCloseMenu();
                              setCourseOpen(false);
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
