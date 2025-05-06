import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

export default function CreateAssessmentPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [questions, setQuestions] = useState([{ question: "", answer: "" }]);

  const navigate = useNavigate();

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: "", answer: "" }]);
  };

  const handleQuestionChange = (index: number, field: string, value: string) => {
    const updated = [...questions];
    (updated[index] as any)[field] = value;
    setQuestions(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      toast({ title: "Error", description: "Assessment title is required." });
      return;
    }

    if (!duration.trim() || isNaN(Number(duration))) {
      toast({ title: "Error", description: "Valid duration is required." });
      return;
    }

    const emptyQuestion = questions.some(q => !q.question.trim());
    if (emptyQuestion) {
      toast({ title: "Error", description: "All questions must be filled in." });
      return;
    }

    const newAssessment = {
      id: Date.now(),
      title,
      description,
      duration: parseInt(duration),
      questions,
    };

    console.log("Assessment Created:", newAssessment);

    toast({
      title: "Assessment Created",
      description: `"${title}" with ${questions.length} question(s) has been created.`,
    });

    navigate("/assessments");
  };

  return (
    <MainLayout requireAuth allowedRoles={["teacher"]}>
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Create New Assessment</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title">Assessment Title</Label>
            <Input
              id="title"
              placeholder="e.g. Physics Test"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Write a brief description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="duration">Duration (minutes)</Label>
            <Input
              id="duration"
              type="number"
              placeholder="e.g. 60"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Questions</h2>
            {questions.map((q, index) => (
              <div key={index} className="mb-4 space-y-2 border p-4 rounded-md">
                <Label>Question {index + 1}</Label>
                <Textarea
                  placeholder="Enter question text..."
                  value={q.question}
                  onChange={(e) => handleQuestionChange(index, "question", e.target.value)}
                  required
                />
                <Input
                  placeholder="Optional answer (if applicable)"
                  value={q.answer}
                  onChange={(e) => handleQuestionChange(index, "answer", e.target.value)}
                />
              </div>
            ))}
            <Button type="button" variant="outline" onClick={handleAddQuestion}>
              + Add Another Question
            </Button>
          </div>

          <div className="flex justify-end">
            <Button type="submit">Create Assessment</Button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
