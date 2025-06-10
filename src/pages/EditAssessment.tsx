import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { mockAssessments, mockQuestions } from '@/data/mockData';

export default function EditAssessment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const assessment = mockAssessments.find(a => a.id === id);
  const [title, setTitle] = useState(assessment?.title || '');
  const [description, setDescription] = useState(assessment?.description || '');
  const [questions, setQuestions] = useState(mockQuestions);

  const handleQuestionChange = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, oIndex, field, value) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex][field] = field === 'isCorrect' ? value === 'true' : value;
    setQuestions(updated);
  };

  const saveAssessment = () => {
    // Handle submission or API update logic here
    console.log('Updated Assessment:', {
      title,
      description,
      questions,
    });
    navigate('/assessments');
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold">Edit Assessment</h2>

      <div className="space-y-4">
        <Label>Title</Label>
        <Input value={title} onChange={e => setTitle(e.target.value)} />

        <Label>Description</Label>
        <Textarea value={description} onChange={e => setDescription(e.target.value)} />
      </div>

      <Tabs defaultValue="questions">
        <TabsList className="grid w-full grid-cols-2 mt-6">
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="questions" className="space-y-6 mt-4">
          {questions.map((q, qIndex) => (
            <Card key={q.id} className="p-4 space-y-4 border">
              <div className="space-y-2">
                <Label>Question Text</Label>
                <Textarea
                  value={q.text}
                  onChange={e => handleQuestionChange(qIndex, 'text', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Difficulty Level</Label>
                <select
                  className="border rounded px-3 py-2 w-full"
                  value={q.difficultyLevel}
                  onChange={e => handleQuestionChange(qIndex, 'difficultyLevel', e.target.value)}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div className="space-y-4">
                <Label>Options</Label>
                {q.options.map((option, oIndex) => (
                  <div key={option.id} className="grid grid-cols-6 items-center gap-2">
                    <Input
                      className="col-span-4"
                      value={option.text}
                      onChange={e =>
                        handleOptionChange(qIndex, oIndex, 'text', e.target.value)
                      }
                    />
                    <select
                      className="col-span-2 border px-2 py-1 rounded"
                      value={String(option.isCorrect)}
                      onChange={e =>
                        handleOptionChange(qIndex, oIndex, 'isCorrect', e.target.value)
                      }
                    >
                      <option value="true">Correct</option>
                      <option value="false">Incorrect</option>
                    </select>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="preview" className="mt-6">
          <h3 className="font-semibold text-lg mb-4">Assessment Preview</h3>
          <div className="space-y-4">
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Description:</strong> {description}</p>
            <ul className="list-disc ml-6">
              {questions.map((q, i) => (
                <li key={q.id}>
                  {q.text} ({q.difficultyLevel})
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      <div className="pt-4 flex justify-end">
        <Button onClick={saveAssessment}>Save Changes</Button>
      </div>
    </div>
  );
}
