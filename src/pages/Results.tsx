import React, { useState } from 'react';
import EnhancedNavigation from '@/components/EnhancedNavigation';
import Footer from '@/components/Footer';
import ResultsSection from '@/components/ResultsSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Search, Loader2, X, Clock, Award, User, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Results = () => {
  const [searchNumber, setSearchNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiResult, setApiResult] = useState(null);
  const [error, setError] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = async () => {
    const trimmedNumber = searchNumber.trim();
    
    if (!trimmedNumber) {
      setError('Please enter a student ID or roll number');
      return;
    }

    if (trimmedNumber.length < 2) {
      setError('Student ID must be at least 2 digits');
      return;
    }

    if (parseInt(trimmedNumber) <= 0) {
      setError('Please enter a valid positive number');
      return;
    }

    setIsLoading(true);
    setError('');
    setApiResult(null);

    try {
      // Using JSONPlaceholder API as an example - replace with your actual API
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${trimmedNumber}`);
      
      if (!response.ok) {
        throw new Error('Student not found in our records');
      }
      
      const data = await response.json();
      
      // Transform the API response to look like student results
      const studentResult = {
        studentId: data.id,
        rollNumber: `BVM${String(data.id).padStart(4, '0')}`,
        studentName: `Student ${data.id}`,
        class: data.id <= 50 ? "Class XII" : "Class X",
        section: String.fromCharCode(65 + (data.id % 4)), // A, B, C, D
        academicYear: "2024-25",
        percentage: Math.min(95, 60 + (data.id % 35)),
        grade: function() {
          if (this.percentage >= 90) return "A+";
          if (this.percentage >= 80) return "A";
          if (this.percentage >= 70) return "B+";
          if (this.percentage >= 60) return "B";
          return "C";
        }(),
        subjects: [
          { name: "Mathematics", marks: Math.min(100, 70 + (data.id % 30)), total: 100 },
          { name: "Science", marks: Math.min(100, 65 + (data.id % 35)), total: 100 },
          { name: "English", marks: Math.min(100, 75 + (data.id % 25)), total: 100 },
          { name: "Social Studies", marks: Math.min(100, 70 + (data.id % 30)), total: 100 },
          { name: "Hindi", marks: Math.min(100, 80 + (data.id % 20)), total: 100 }
        ],
        attendance: Math.min(100, 85 + (data.id % 15)),
        rank: Math.ceil(data.id / 2),
        examDate: "March 2024"
      };
      
      setApiResult(studentResult);
      
      // Add to search history
      setSearchHistory(prev => {
        const newHistory = [trimmedNumber, ...prev.filter(item => item !== trimmedNumber)].slice(0, 5);
        return newHistory;
      });
      
    } catch (err) {
      setError(err.message || 'Failed to fetch student results. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchNumber('');
    setApiResult(null);
    setError('');
  };

  const handleHistoryClick = (number) => {
    setSearchNumber(number);
  };

  return (
    <div className="min-h-screen">
      <EnhancedNavigation />
      
      {/* Back to Home Button */}
      <div className="container-width pt-20 pb-4">
        <Link to="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-bvm-gold to-bvm-heritage py-16">
        <div className="container-width text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4">
            Academic Results
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Excellence in Achievement • Outstanding Performance • Future Leaders
          </p>
        </div>
      </section>

      {/* Content */}
      <ResultsSection />
      
      {/* API Search Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container-width">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl font-bold text-bvm-navy mb-4">
                Student Result Lookup
              </h2>
              <p className="text-bvm-heritage">
                Enter a student ID or roll number to fetch detailed results
              </p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-bvm-navy">Search Student Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-1 relative">
                      <Input
                        type="number"
                        placeholder="Enter student ID or roll number (e.g., 123)"
                        value={searchNumber}
                        onChange={(e) => setSearchNumber(e.target.value)}
                        className="pr-10"
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        min="1"
                      />
                      {searchNumber && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={clearSearch}
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 hover:bg-gray-100"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                    <Button 
                      onClick={handleSearch}
                      disabled={isLoading || !searchNumber.trim()}
                      className="bg-bvm-navy hover:bg-bvm-heritage transition-all duration-200"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Searching...
                        </>
                      ) : (
                        <>
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Search History */}
                  {searchHistory.length > 0 && !apiResult && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">Recent Searches</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {searchHistory.map((number, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleHistoryClick(number)}
                            className="h-7 px-2 text-xs border-blue-300 text-blue-700 hover:bg-blue-100"
                          >
                            {number}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                {apiResult && (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 space-y-6 animate-fade-in">
                    <div className="flex items-center justify-between border-b border-green-200 pb-4">
                      <h3 className="font-playfair text-xl font-bold text-green-800 flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        Student Result Found
                      </h3>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Grade: {apiResult.grade}
                      </div>
                    </div>
                    
                    {/* Student Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/60 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <User className="h-4 w-4 text-green-600" />
                          <span className="font-medium text-green-700">Student Details</span>
                        </div>
                        <div className="space-y-1 text-sm">
                          <p><span className="font-medium">Name:</span> {apiResult.studentName}</p>
                          <p><span className="font-medium">Roll No:</span> {apiResult.rollNumber}</p>
                          <p><span className="font-medium">Student ID:</span> {apiResult.studentId}</p>
                        </div>
                      </div>
                      
                      <div className="bg-white/60 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="h-4 w-4 text-green-600" />
                          <span className="font-medium text-green-700">Academic Info</span>
                        </div>
                        <div className="space-y-1 text-sm">
                          <p><span className="font-medium">Class:</span> {apiResult.class}</p>
                          <p><span className="font-medium">Section:</span> {apiResult.section}</p>
                          <p><span className="font-medium">Academic Year:</span> {apiResult.academicYear}</p>
                        </div>
                      </div>
                      
                      <div className="bg-white/60 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="h-4 w-4 text-green-600" />
                          <span className="font-medium text-green-700">Performance</span>
                        </div>
                        <div className="space-y-1 text-sm">
                          <p><span className="font-medium">Percentage:</span> {apiResult.percentage}%</p>
                          <p><span className="font-medium">Class Rank:</span> {apiResult.rank}</p>
                          <p><span className="font-medium">Attendance:</span> {apiResult.attendance}%</p>
                        </div>
                      </div>
                    </div>

                    {/* Subject Results */}
                    <div className="bg-white/60 rounded-lg p-4">
                      <h4 className="font-medium text-green-700 mb-3">Subject-wise Results</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {apiResult.subjects.map((subject, index) => (
                          <div key={index} className="bg-white rounded-lg p-3 border border-green-100">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-gray-700 text-sm">{subject.name}</span>
                              <span className="text-green-600 font-bold">{subject.marks}/{subject.total}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                              <div 
                                className="bg-green-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${(subject.marks / subject.total) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-green-600 text-center pt-2 border-t border-green-200">
                      Exam conducted in: {apiResult.examDate} | Results generated on: {new Date().toLocaleDateString()}
                    </div>
                  </div>
                )}

                {!apiResult && !error && !isLoading && (
                  <div className="text-center text-bvm-heritage py-8">
                    Enter a number above to search for student results
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Results;