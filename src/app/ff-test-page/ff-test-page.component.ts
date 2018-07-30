import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { I18nService } from '@app/core';
import { environment } from '@env/environment';
import { JokesService } from '@app/core/jokes/jokes.service';
import { Joke } from '@app/shared/models/joke';

@Component({
  selector: 'app-ff-test-page',
  templateUrl: './ff-test-page.component.html',
  styleUrls: ['./ff-test-page.component.scss']
})
export class FfTestPageComponent implements OnInit {

  version: string = environment.version;
  error: string;
  searchForm: FormGroup;
  isLoading = false;
  jokes: Joke[] = [];

  constructor(private formBuilder: FormBuilder,
              private jokesService: JokesService,
              private i18nService: I18nService) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required]
    });
  }

  search() {
    console.log(this.searchForm.value);
    const datForm = this.searchForm.value;
    this.isLoading = true;
    this.jokesService.getList(datForm.search)
      .subscribe((data) => {
        console.log(data);
        this.jokes = data['result'];
        this.isLoading = false;
        // log.debug(`${credentials.username} successfully logged in`);
        // this.router.navigate(['/'], { replaceUrl: true });
      }, error => {
        // log.debug(`Login error: ${error}`);
        // this.error = error;
      });
  }

}
