import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Candidate } from './candidate';
import { SingleSkill, SkillsInterface } from './skills-interface';
import { SingleExperienceInterface } from './experience-interface';
import { SingleEducationInterface } from './education-interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'roadmap-frontend-projects-angular';
  candidate: Candidate = {
    Name: 'Jhonatan Rodolfo Morales Carrillo',
    Position: 'Web Developer and RPA',
    Address: '14 South Street, Llanitos Downtown. Los Patios, Norte de Santander, Colombia',
    PhoneNumber: '+57 000 0000',
    Email: 'jhonatann989@gmail.com'
  };
  skills: Array<SingleSkill> = [
    { Name: "HTML" },
    { Name: "Javascript" },
    { Name: "React JS" },
    { Name: "Node JS" },
    { Name: "Automation Anywhere" },
    { Name: "Power Automate Desktop" },
    { Name: "English (C1)" },
    { Name: "SQL (Basics)" },
    { Name: "C# (Basics)" }
  ]
  educations:Array<SingleEducationInterface> = [
    {
      Institute: "Instituto Universitario de Tecnología Agroindustrial Región Los Andes",
      Degree: "Engineer Degree",
      From: "September 2010",
      To: "July 2014"
    }
  ]
  experiences:Array<SingleExperienceInterface> = [
    {
      Company: "Teleperformance",
      Position: "Semi Senior Developer",
      From: "September 2023",
      To: "Today",
      LearnedSkills: [
        {Name: "Power Automate Desktop"},
        {Name: "C#"},
        {Name: "Leadership"}
      ]
    },
    {
      Company: "Teleperformance",
      Position: "Junior Developer",
      From: "March 2021",
      To: "September 2023",
      LearnedSkills: [
        {Name: "Automation Anywhere"},
        {Name: "Google Apps Script"},
        {Name: "Node JS"}
      ]
    },
    {
      Company: "Inversiones en Soluciones de TI de Codigo Abierto SAS",
      Position: "Junior Developer",
      From: "December 2019",
      To: "March 2021",
      LearnedSkills: [
        {Name: "React JS"},
        {Name: "REST"},
        {Name: "Symfony"}
      ]
    }
  ]
}
