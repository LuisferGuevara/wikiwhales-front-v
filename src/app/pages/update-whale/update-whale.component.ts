import { Router } from "@angular/router";
import { Route } from "@angular/router";
import { Validators } from "@angular/forms";
import { FormBuilder, FormGroup } from "@angular/forms";
import { WhalesService } from "./../../services/whales.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-update-whale",
  templateUrl: "./update-whale.component.html",
  styleUrls: ["./update-whale.component.scss"],
})
export class UpdateWhaleComponent implements OnInit {
  whaleForm!: FormGroup;
  updatedWhale!: any;
  id: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private whaleService: WhalesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      this.id = params.get("id");
      this.whaleService.getOneWhale(this.id).subscribe(data =>{
        console.log(data);
        this.updatedWhale = data
        
        this.whaleForm = this.formBuilder.group({
          name: [this.updatedWhale.name, [Validators.required]],
          image: [this.updatedWhale.image, [Validators.required]],
          description: [this.updatedWhale.description, [Validators.required]],
          length: [this.updatedWhale.length],
          weight: [this.updatedWhale.weight],
          scientificName: [this.updatedWhale.scientificName],
        });
      })
    });
    
    this.whaleForm.valueChanges.subscribe((changes) =>{
      this.updatedWhale = changes;
    })
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    console.log(file);
    this.whaleForm.patchValue({
      image: file,
    });
  }
  onSubmit() {
    const formData = new FormData();
    formData.append("name", this.whaleForm.get("name")?.value);
    formData.append("image", this.whaleForm.get("image")?.value);
    formData.append("description", this.whaleForm.get("description")?.value);
    formData.append("length", this.whaleForm.get("length")?.value);
    formData.append("weight", this.whaleForm.get("weight")?.value);
    formData.append("scientificName", this.whaleForm.get("scientificName")?.value);
    this.whaleService.putWhale(this.id, formData).subscribe(()=>{
      this.router.navigate(["/whales"]);
    });
  }
}
