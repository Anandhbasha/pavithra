import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  imports: [RouterLink],
  templateUrl: './studentdetails.html',
  styleUrl: './studentdetails.css',
})
export class Studentdetails {
  private route = inject(ActivatedRoute)
  studentId = this.route.snapshot.paramMap.get('id')
}
