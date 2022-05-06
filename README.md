## Phase 3 Project

Task lister app / todo app

## Database Schema

Users - has_many Tasks
  User ID (integer)
  User Name (String)
  Timestamps

Tasks - belongs_to Categories and users
  Task ID (integer)
  Task Name (string)
  Category ID (integer, foreign key)
  User ID (integer, foreign key)
  Deadline (datetime) # https://api.rubyonrails.org/classes/DateTime.html
  Timestamps

Categories - has_many Tasks
  Category ID (integer)
  Category Name (string)
  Category Priority (string)
  Timestamps

## MVP

  1. Homepage
  2. Navigation
  3. List Tasks Page
  4. New Task Form Page
  5. Edit Task
  6. Delete Task

## Stretch Goals

  1. Color code tasks based on category (e.g. Work, Personal, Home, etc.) Bootstrap, Tailwind, Material UI
  2. Add a deadline function to allow for alerts (use time to create a countdown)
  3. Add "priority level" that perhaps increases the frequency of alerts as deadlines approach 
  4. Try to integrate this task app with Google/local calendar


Copyright (c) 2022 TDIMP

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.