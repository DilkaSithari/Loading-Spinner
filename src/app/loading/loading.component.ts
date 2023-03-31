import { Component } from '@angular/core';
import { DesignutilityService } from '../designutility.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  loading: Boolean | undefined;
  constructor(private _du: DesignutilityService) {
    this._du.loading.subscribe((res) => {
      this.loading = res;
    });
  }
  ngOnInit(): void {}
}
