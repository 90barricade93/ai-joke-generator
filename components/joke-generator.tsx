/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/EKH5nRy6rW9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Fira_Mono } from 'next/font/google'

fira_mono({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
'use client';

import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import Image from 'next/image';
import { TextArea } from '@/components/ui/textarea';
import { useChat } from 'ai/react';
import StreamingTextResponse from 'openai';

export function JokeGenerator() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('');
  const [type, setType] = useState('');
  const [temperature, setTemperature] = useState(0.5);
  const [joke, setJoke] = useState('');
  const [funniness, setFunniness] = useState(0);
  const [appropriateness, setAppropriateness] = useState(0);
  const [offensiveness, setOffensiveness] = useState(0);
  const [response, setResponse] = useState('');
  const toneOptions = [
    'Witty',
    'Sarcastic',
    'Silly',
    'Dark',
    'Goofy',
    'Dry',
    'Slapstick',
    'Irony',
    'Deadpan',
    'Satirical',
    'Absurd',
    'Self-deprecating',
    'Pun-based',
    'Cynical',
    'Parodic',
    'Blue',
    'Observational',
    'Surreal',
    'Whimsical',
    'Juvenile',
    'Cringe',
    'Black-comedy',
    'Tongue-in-cheek',
    'Offbeat',
    'Sophisticated',
  ];
  const topicOptions = [
    'Animals',
    'Work',
    'Relationships',
    'Technology',
    'Politics',
    'Food',
    'Sports',
    'Health',
    'Travel',
    'School',
    'Pop Culture',
    'Parenting',
    'Hobbies',
    'Aging',
    'History',
    'Science',
    'Holidays',
    'Weather',
    'Music',
    'Movies',
    'Books',
    'Social Media',
    'Fashion',
    'Money',
    'Fitness',
  ];
  const typeOptions = ['One-liner', 'Question', 'Pun', 'Knock-Knock', 'Story', 'Conversation'];
  const generateJoke = async () => {
    try {
      const response = await fetch('api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ setTopic, setTone, setTemperature }),
      });
      const data = await response.json();
      console.log(data.joke);
      setJoke(data.joke);
    } catch (error) {
      console.error('Error generating joke:', error);
    }
  };
  const evaluateJoke = () => {
    setFunniness(Math.floor(Math.random() * 6));
    setAppropriateness(Math.floor(Math.random() * 6));
    setOffensiveness(Math.floor(Math.random() * 6));
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 dark:bg-gray-800">
      <div className="bg-gray-800 dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col items-center">
        <div className="relative w-full max-w-[1200px]">
          <Image
            src="/Banner-1200x200.jpg"
            alt="AI Joke Generator"
            width={1200}
            height={200}
            className="w-full max-w-[1200px] object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <h1 className="text-2xl font-bold text-white font-robotico">AI JOKE GENERATOR</h1>
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-1/2 space-y-4">
            <div>
              <label htmlFor="topic" className="block font-medium mb-2 text-white">
                <span className="font-bold">Topic</span>
              </label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="default"
                    size="icon"
                    className="w-full flex items-center justify-between rounded-md bg-gray-700 dark:bg-gray-700 text-gray-200 dark:text-gray-200 hover:bg-gray-600 dark:hover:bg-gray-600"
                  >
                    {topic || 'Select a topic'}
                    <ChevronDownIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-h-[300px] overflow-auto">
                  <DropdownMenuGroup>
                    {topicOptions.map((option) => (
                      <DropdownMenuItem
                        key={option}
                        onClick={() => setTopic(option)}
                        className={`flex items-center justify-between px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 ${
                          topic === option ? 'bg-gray-600 dark:bg-gray-600' : ''
                        }`}
                      >
                        {option}
                        {topic === option && <CheckIcon className="w-4 h-4" />}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <label htmlFor="tone" className="block font-medium mb-2 text-white">
                <span className="font-bold">Tone</span>
              </label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="default"
                    size="icon"
                    className="w-full flex items-center justify-between rounded-md bg-gray-700 dark:bg-gray-700 text-gray-200 dark:text-gray-200 hover:bg-gray-600 dark:hover:bg-gray-600"
                  >
                    {tone || 'Select a tone'}
                    <ChevronDownIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-h-[300px] overflow-auto">
                  <DropdownMenuGroup>
                    {toneOptions.map((option) => (
                      <DropdownMenuItem
                        key={option}
                        onClick={() => setTone(option)}
                        className={`flex items-center justify-between px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 ${
                          tone === option ? 'bg-gray-600 dark:bg-gray-600' : ''
                        }`}
                      >
                        {option}
                        {tone === option && <CheckIcon className="w-4 h-4" />}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <label htmlFor="type" className="block font-medium mb-2 text-white">
                <span className="font-bold">Type</span>
              </label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="default"
                    size="icon"
                    className="w-full flex items-center justify-between rounded-md bg-gray-700 dark:bg-gray-700 text-gray-200 dark:text-gray-200 hover:bg-gray-600 dark:hover:bg-gray-600"
                  >
                    {type || 'Select a type'}
                    <ChevronDownIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-h-[300px] overflow-auto">
                  <DropdownMenuGroup>
                    {typeOptions.map((option) => (
                      <DropdownMenuItem
                        key={option}
                        onClick={() => setType(option)}
                        className={`flex items-center justify-between px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 ${
                          type === option.toLowerCase() ? 'bg-gray-600 dark:bg-gray-600' : ''
                        }`}
                      >
                        {option}
                        {type === option.toLowerCase() && <CheckIcon className="w-4 h-4" />}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <label htmlFor="temperature" className="block font-medium mb-2 text-white">
                Temperature
              </label>
              <input
                id="temperature"
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full"
              />
              <p className="text-sm text-gray-400">{temperature.toFixed(1)} (Higher values = more randomness/fun)</p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={generateJoke}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md w-full"
              >
                Generate Joke
              </button>
            </div>
          </div>
          <div className="w-1/2 bg-gray-700 dark:bg-gray-700 p-4 rounded-md flex flex-col justify-center items-center">
            {joke ? (
              <div className="text-gray-200 dark:text-gray-200 text-center w-full">
                <p>{joke}</p>
                <div className="flex justify-between mt-2">
                  <button
                    onClick={evaluateJoke}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md w-full"
                  >
                    Evaluate Joke
                  </button>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <ThumbsUpIcon className="h-5 w-5 text-green-500" />
                      <span className="text-gray-200 dark:text-gray-200">{funniness}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUpIcon className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-200 dark:text-gray-200">{appropriateness}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsDownIcon className="h-5 w-5 text-red-500" />
                      <span className="text-gray-200 dark:text-gray-200">{offensiveness}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <TextArea className="w-full bg-background dark:bg-background text-white font-robotico" readOnly={true} rows={20}>
                {joke ? <p>{joke}</p> : "Click 'Generate Joke' to see the result."}
              </TextArea>
            )}
          </div>
        </div>
        <div className="w-full border-t border-gray-600 dark:border-gray-600 mt-4 pt-4 text-center text-gray-400">
          Powered by AI Joke Generator
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ThumbsDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  );
}

function ThumbsUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function GenerateJoke(params: { setTopic: string; setTone: string; setTemperature: number }) {
  const [prompt, setPrompt] = useState('');

  if (!params.setTopic || !params.setTone || !params.setTemperature) return <button disabled>Generate Joke Prompt</button>;

  if (!prompt)
    return (
      <div className="p-4 m-4 max-w-lg text-center mx-auto">
        <section className="mb-auto m">
          {messages.map((m) => (
            <div className="mb-4" key={m.id}>
              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}
            </div>
          ))}
        </section>
      </div>
    );

  return (
    <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4 text-center">
      <h3 className="text-xl font-semibold">Generated Joke</h3>
      <Textarea className="min-h-[100px]" id="joke-output" placeholder={prompt} />
      <Button
        className="bg-gray-900 text-white mx-auto"
        size="sm"
        variant="outline"
        onClick={() => {
          navigator.clipboard.writeText(prompt);
        }}
      >
        Copy to clipboard
      </Button>
      <Button
        className="bg-gray-900 text-white mx-auto"
        size="sm"
        variant="outline"
        onClick={() => {
          setPrompt('');
        }}
      >
        Retry
      </Button>
    </div>
  );
}

function calculatePrompt(params: { setTopic: string; setTone: string; setTemperature: number }): string {
  return `Please generate a ${params.setTopic} topiced joke with a ${params.setTone} tone. Make it ${
    params.setTemperature
  }. Take a deep breath and let your mind wander. The stage is yours.`;
}
