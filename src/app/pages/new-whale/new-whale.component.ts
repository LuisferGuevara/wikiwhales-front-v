import { WhalesService } from './../../services/whales.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-whale',
  templateUrl: './new-whale.component.html',
  styleUrls: ['./new-whale.component.scss'],
})
export class NewWhaleComponent implements OnInit {
  newWhale: any = {
    name: '',
    image: '',
    description: '',
    length: '',
    weight: '',
    scientificName: '',
  };

  whaleForm!: FormGroup;

  constructor(
    private whaleService: WhalesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.whaleForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      length: [''],
      weight: [''],
      scientificName: [''],
    });

    this.whaleForm.valueChanges.subscribe((changes) => {
      this.newWhale = changes;
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    console.log(file);
    this.whaleForm.patchValue({
      image: file,
    });
  }

  onSubmit() {
    console.log(this.newWhale);
    const formData = new FormData();
    formData.append('name', this.whaleForm.get('name')?.value);
    formData.append('image', this.whaleForm.get('image')?.value);
    formData.append('description', this.whaleForm.get('description')?.value);
    formData.append('length', this.whaleForm.get('length')?.value);
    formData.append('weight', this.whaleForm.get('weight')?.value);
    formData.append(
      'scientificName',
      this.whaleForm.get('scientificName')?.value
    );
    this.whaleService
      .postWhale(formData)
      .subscribe(() => this.router.navigate(['/whales']));
  }
}
