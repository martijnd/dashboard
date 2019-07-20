import {HttpClient} from '@angular/common/http';

export class UurbestuurService {
  private uurbestuurKey = '8jvAwFUfzXcQMoSJNGy5pwd7CNIOTVPFee1jmVkfNvxtyFWshRZKv5HvAC04';

  constructor(private http: HttpClient) {
  }

  public fetchData() {
    return this.http.get('http://www.uurbestuur.nl/api/user', {params: {api_token: this.uurbestuurKey}});
  }

}
