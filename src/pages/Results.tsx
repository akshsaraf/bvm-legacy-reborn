import React, { useState } from 'react';
import EnhancedNavigation from '@/components/EnhancedNavigation';
import Footer from '@/components/Footer';
import ResultsSection from '@/components/ResultsSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Search, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Results = () => {
  const [searchNumber, setSearchNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiResult, setApiResult] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!searchNumber.trim()) {
      setError('Please enter a number');
      return;
    }

    setIsLoading(true);
    setError('');
    setApiResult(null);

    try {
      // Using JSONPlaceholder API as an example - replace with your actual API
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${searchNumber}`);
      
      if (!response.ok) {
        throw new Error('Data not found');
      }
      
      const data = await response.json();
      setApiResult(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
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
                <div className="flex gap-3">
                  <Input
                    type="number"
                    placeholder="Enter student ID or roll number"
                    value={searchNumber}
                    onChange={(e) => setSearchNumber(e.target.value)}
                    className="flex-1"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <Button 
                    onClick={handleSearch}
                    disabled={isLoading}
                    className="bg-bvm-navy hover:bg-bvm-heritage"
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

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                {apiResult && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-3">Result Found:</h3>
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="font-medium text-green-700">ID:</span>
                          <span className="ml-2 text-green-600">{apiResult.id}</span>
                        </div>
                        <div>
                          <span className="font-medium text-green-700">User ID:</span>
                          <span className="ml-2 text-green-600">{apiResult.userId}</span>
                        </div>
                      </div>
                      <div>
                        <span className="font-medium text-green-700">Title:</span>
                        <p className="mt-1 text-green-600">{apiResult.title}</p>
                      </div>
                      <div>
                        <span className="font-medium text-green-700">Content:</span>
                        <p className="mt-1 text-green-600">{apiResult.body}</p>
                      </div>
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