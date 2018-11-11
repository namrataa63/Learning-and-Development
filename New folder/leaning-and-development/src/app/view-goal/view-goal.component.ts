import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-goal',
  templateUrl: './view-goal.component.html',
  styleUrls: ['./view-goal.component.css']
})
export class ViewGoalComponent implements OnInit {
  chapters: any[];
  additionalReferences: any[];
  constructor() { }

  ngOnInit() {
    this.chapters = [
      { chapter: '1', name: 'Java Spring', contentLink: 'www.javaspring.com', credits: '5', assignmentLink: 'www.assignment1.com' },
      { chapter: '2', name: 'Java Hibernate', contentLink: 'www.javahibernate.com', credits: '10', assignmentLink: 'www.assignment2.com' },
      { chapter: '1', name: 'Java Spring', contentLink: 'www.javaspring.com', credits: '5', assignmentLink: 'www.assignment1.com' }
    ];

    this.additionalReferences = [
      { purpose: 'Reference 1', contentLink: 'www.reference1.com' },
      { purpose: 'Reference 2', contentLink: 'www.reference2.com' },
      { purpose: 'Reference 3', contentLink: 'www.reference3.com' }
    ];
  }

}
