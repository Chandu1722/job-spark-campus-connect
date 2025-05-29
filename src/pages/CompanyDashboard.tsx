
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Plus, Search, Users, MapPin, Clock, Building, Eye, FileText, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CompanyDashboard = () => {
  const navigate = useNavigate();
  const [showJobForm, setShowJobForm] = useState(false);
  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    requirements: '',
    location: '',
    type: 'Full-time',
    skills: ''
  });

  const companyData = {
    name: "TechCorp Solutions",
    logo: "TC",
    industry: "Technology",
    size: "500-1000 employees"
  };

  const mockJobs = [
    {
      id: 1,
      title: "Software Engineer Intern",
      location: "Bangalore, India",
      type: "Internship",
      applications: 45,
      posted: "2024-01-15",
      status: "Active",
      skills: ["React", "Node.js", "Python"]
    },
    {
      id: 2,
      title: "Senior Frontend Developer",
      location: "Mumbai, India",
      type: "Full-time",
      applications: 32,
      posted: "2024-01-12",
      status: "Active",
      skills: ["JavaScript", "React", "TypeScript"]
    },
    {
      id: 3,
      title: "Data Scientist",
      location: "Delhi, India",
      type: "Full-time",
      applications: 28,
      posted: "2024-01-10",
      status: "Closed",
      skills: ["Python", "Machine Learning", "SQL"]
    }
  ];

  const mockCandidates = [
    {
      id: 1,
      name: "John Doe",
      university: "ABC University",
      major: "Computer Science",
      gpa: "3.8/4.0",
      skills: ["JavaScript", "React", "Python", "Node.js"],
      matchScore: 92,
      appliedFor: "Software Engineer Intern",
      resumeScore: 4.5
    },
    {
      id: 2,
      name: "Jane Smith",
      university: "XYZ Institute",
      major: "Information Technology",
      gpa: "3.9/4.0",
      skills: ["React", "TypeScript", "CSS", "Node.js"],
      matchScore: 88,
      appliedFor: "Senior Frontend Developer",
      resumeScore: 4.7
    },
    {
      id: 3,
      name: "Mike Johnson",
      university: "Tech University",
      major: "Data Science",
      gpa: "3.7/4.0",
      skills: ["Python", "Machine Learning", "SQL", "Tableau"],
      matchScore: 85,
      appliedFor: "Data Scientist",
      resumeScore: 4.3
    }
  ];

  const handleJobSubmit = () => {
    // Handle job posting logic
    setShowJobForm(false);
    setNewJob({
      title: '',
      description: '',
      requirements: '',
      location: '',
      type: 'Full-time',
      skills: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-purple-100">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="text-purple-600 hover:text-purple-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Company Dashboard
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, {companyData.name}</span>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              {companyData.logo}
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="jobs">Manage Jobs</TabsTrigger>
            <TabsTrigger value="candidates">Candidates</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border border-purple-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Active Jobs</CardTitle>
                  <div className="text-2xl font-bold text-purple-600">2</div>
                </CardHeader>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border border-blue-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Total Applications</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">105</div>
                </CardHeader>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border border-green-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Interviews Scheduled</CardTitle>
                  <div className="text-2xl font-bold text-green-600">12</div>
                </CardHeader>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border border-orange-100">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Candidates Hired</CardTitle>
                  <div className="text-2xl font-bold text-orange-600">5</div>
                </CardHeader>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-white/80 backdrop-blur-sm border border-purple-100">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your recruitment process efficiently</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Dialog open={showJobForm} onOpenChange={setShowJobForm}>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 h-20 flex flex-col">
                        <Plus className="w-6 h-6 mb-2" />
                        Post New Job
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl bg-white">
                      <DialogHeader>
                        <DialogTitle>Post a New Job</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                          <Input
                            value={newJob.title}
                            onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                            placeholder="e.g. Software Engineer"
                            className="bg-white border-purple-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                          <Input
                            value={newJob.location}
                            onChange={(e) => setNewJob({...newJob, location: e.target.value})}
                            placeholder="e.g. Bangalore, India"
                            className="bg-white border-purple-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Required Skills</label>
                          <Input
                            value={newJob.skills}
                            onChange={(e) => setNewJob({...newJob, skills: e.target.value})}
                            placeholder="e.g. React, Node.js, Python"
                            className="bg-white border-purple-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
                          <Textarea
                            value={newJob.description}
                            onChange={(e) => setNewJob({...newJob, description: e.target.value})}
                            placeholder="Describe the role and responsibilities..."
                            className="bg-white border-purple-200 h-32"
                          />
                        </div>
                        <Button onClick={handleJobSubmit} className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                          Post Job
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="outline" className="h-20 flex flex-col border-blue-200 hover:bg-blue-50">
                    <Search className="w-6 h-6 mb-2 text-blue-600" />
                    Search Candidates
                  </Button>
                  
                  <Button variant="outline" className="h-20 flex flex-col border-green-200 hover:bg-green-50">
                    <FileText className="w-6 h-6 mb-2 text-green-600" />
                    View Reports
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <Card className="bg-white/80 backdrop-blur-sm border border-purple-100">
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Latest candidates who applied to your jobs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockCandidates.slice(0, 3).map((candidate) => (
                    <div key={candidate.id} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
                          <p className="text-gray-600">{candidate.university} • {candidate.major}</p>
                          <p className="text-sm text-gray-500">Applied for: {candidate.appliedFor}</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-100 text-green-800 mb-1">
                            {candidate.matchScore}% Match
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Star className="w-4 h-4 text-yellow-500 mr-1" />
                            {candidate.resumeScore}/5.0
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {candidate.skills.slice(0, 4).map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                          View Profile
                        </Button>
                        <Button size="sm" variant="outline">
                          Schedule Interview
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Job Listings</h2>
                <p className="text-gray-600">Manage your active and closed job postings</p>
              </div>
              <Dialog open={showJobForm} onOpenChange={setShowJobForm}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Post New Job
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>

            <div className="space-y-4">
              {mockJobs.map((job) => (
                <Card key={job.id} className="bg-white/80 backdrop-blur-sm border border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                          <span className="mx-2">•</span>
                          <Badge variant="outline">{job.type}</Badge>
                          <span className="mx-2">•</span>
                          <Clock className="w-4 h-4 mr-1" />
                          Posted {job.posted}
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                          {job.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-1" />
                          {job.applications} applications
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          View Applicants
                        </Button>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="candidates" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Candidate Pool</h2>
                <p className="text-gray-600">AI-matched candidates for your job openings</p>
              </div>
              <div className="flex gap-4">
                <Input
                  placeholder="Search candidates..."
                  className="w-64 bg-white border-purple-200"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {mockCandidates.map((candidate) => (
                <Card key={candidate.id} className="bg-white/80 backdrop-blur-sm border border-purple-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{candidate.name}</h3>
                        <p className="text-gray-600 mb-1">{candidate.university}</p>
                        <p className="text-sm text-gray-500">{candidate.major} • GPA: {candidate.gpa}</p>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-800 mb-2">
                          {candidate.matchScore}% Match
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          {candidate.resumeScore}/5.0
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Applied for: {candidate.appliedFor}</p>
                      <div className="flex flex-wrap gap-2">
                        {candidate.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 flex-1">
                        View Full Profile
                      </Button>
                      <Button size="sm" variant="outline">
                        Schedule Interview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Recruitment Analytics</h2>
              <p className="text-gray-600">Track your hiring performance and insights</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border border-purple-100">
                <CardHeader>
                  <CardTitle>Application Trends</CardTitle>
                  <CardDescription>Applications received over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Chart visualization would go here</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border border-purple-100">
                <CardHeader>
                  <CardTitle>Top Skills in Demand</CardTitle>
                  <CardDescription>Most requested skills by candidates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {['React', 'Python', 'Node.js', 'JavaScript', 'SQL'].map((skill, index) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 h-2 bg-gray-200 rounded-full">
                            <div 
                              className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                              style={{ width: `${90 - index * 15}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500">{90 - index * 15}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyDashboard;
