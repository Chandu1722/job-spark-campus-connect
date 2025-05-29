
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Upload, Search, MapPin, Clock, Building, BookOpen, Award, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleResumeUpload = () => {
    setResumeUploaded(true);
  };

  const mockJobs = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "TechCorp",
      location: "Bangalore, India",
      type: "Internship",
      skills: ["React", "Node.js", "Python"],
      postedTime: "2 days ago",
      matchScore: 92
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Mumbai, India",
      type: "Full-time",
      skills: ["JavaScript", "React", "CSS"],
      postedTime: "1 week ago",
      matchScore: 87
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "DataCorp",
      location: "Delhi, India",
      type: "Full-time",
      skills: ["Python", "SQL", "Tableau"],
      postedTime: "3 days ago",
      matchScore: 78
    }
  ];

  const mockApplications = [
    {
      id: 1,
      jobTitle: "Software Engineer Intern",
      company: "TechCorp",
      status: "Interview Scheduled",
      appliedDate: "2024-01-15",
      statusColor: "bg-blue-500"
    },
    {
      id: 2,
      jobTitle: "Frontend Developer",
      company: "StartupXYZ",
      status: "Under Review",
      appliedDate: "2024-01-12",
      statusColor: "bg-yellow-500"
    },
    {
      id: 3,
      jobTitle: "Data Analyst",
      company: "DataCorp",
      status: "Applied",
      appliedDate: "2024-01-18",
      statusColor: "bg-green-500"
    }
  ];

  const profileData = {
    name: "John Doe",
    email: "john.doe@university.edu",
    university: "ABC University",
    major: "Computer Science",
    graduationYear: "2024",
    skills: ["JavaScript", "React", "Python", "Node.js", "SQL", "Git"],
    gpa: "3.8/4.0"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-blue-100">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Student Dashboard
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, {profileData.name}</span>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
              {profileData.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="jobs">Find Jobs</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border border-blue-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Applications Sent</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">3</div>
                </CardHeader>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border border-green-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Interviews</CardTitle>
                  <div className="text-2xl font-bold text-green-600">1</div>
                </CardHeader>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border border-purple-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Profile Views</CardTitle>
                  <div className="text-2xl font-bold text-purple-600">27</div>
                </CardHeader>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border border-orange-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Job Matches</CardTitle>
                  <div className="text-2xl font-bold text-orange-600">15</div>
                </CardHeader>
              </Card>
            </div>

            {/* Resume Upload Section */}
            <Card className="bg-white/80 backdrop-blur-sm border border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  Resume Parser
                </CardTitle>
                <CardDescription>
                  Upload your resume to get AI-powered job recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!resumeUploaded ? (
                  <div className="border-2 border-dashed border-blue-200 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Your Resume</h3>
                    <p className="text-gray-600 mb-4">Drag and drop your resume or click to browse</p>
                    <Button onClick={handleResumeUpload} className="bg-gradient-to-r from-blue-600 to-purple-600">
                      Choose File
                    </Button>
                  </div>
                ) : (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-900">Resume Parsed Successfully!</h3>
                        <p className="text-green-700">john_doe_resume.pdf</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Skills Extracted:</span>
                        <span className="font-medium">{profileData.skills.length} skills found</span>
                      </div>
                      <Progress value={100} className="h-2" />
                      <div className="flex flex-wrap gap-2 mt-4">
                        {profileData.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Job Matches */}
            <Card className="bg-white/80 backdrop-blur-sm border border-blue-100">
              <CardHeader>
                <CardTitle>AI-Recommended Jobs</CardTitle>
                <CardDescription>Based on your skills and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockJobs.slice(0, 2).map((job) => (
                    <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{job.title}</h3>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {job.matchScore}% Match
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{job.company}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-1" />
                        {job.postedTime}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {job.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                        Apply Now
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            {/* Search Section */}
            <Card className="bg-white/80 backdrop-blur-sm border border-blue-100">
              <CardHeader>
                <CardTitle>Find Your Perfect Job</CardTitle>
                <CardDescription>Search from thousands of opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search for jobs, companies, or skills..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-white border-blue-200"
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Listings */}
            <div className="space-y-4">
              {mockJobs.map((job) => (
                <Card key={job.id} className="bg-white/80 backdrop-blur-sm border border-blue-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                        <p className="text-lg text-gray-600 mb-2">{job.company}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                          <span className="mx-2">•</span>
                          <Badge variant="outline">{job.type}</Badge>
                          <span className="mx-2">•</span>
                          <Clock className="w-4 h-4 mr-1" />
                          {job.postedTime}
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-800 mb-2">
                          {job.matchScore}% Match
                        </Badge>
                        <div className="text-sm text-gray-500">
                          AI Recommended
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                        Apply Now
                      </Button>
                      <Button variant="outline">
                        Save Job
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border border-blue-100">
              <CardHeader>
                <CardTitle>My Applications</CardTitle>
                <CardDescription>Track the status of your job applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockApplications.map((application) => (
                    <div key={application.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{application.jobTitle}</h3>
                          <p className="text-gray-600">{application.company}</p>
                          <p className="text-sm text-gray-500">Applied on {application.appliedDate}</p>
                        </div>
                        <Badge className={`${application.statusColor} text-white`}>
                          {application.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Withdraw
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border border-blue-100">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your personal and academic details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <Input value={profileData.name} className="bg-white border-blue-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input value={profileData.email} className="bg-white border-blue-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">University</label>
                    <Input value={profileData.university} className="bg-white border-blue-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Major</label>
                    <Input value={profileData.major} className="bg-white border-blue-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                    <Input value={profileData.graduationYear} className="bg-white border-blue-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">GPA</label>
                    <Input value={profileData.gpa} className="bg-white border-blue-200" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {profileData.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    <Award className="w-4 h-4 mr-2" />
                    Add Skill
                  </Button>
                </div>

                <div className="pt-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;
