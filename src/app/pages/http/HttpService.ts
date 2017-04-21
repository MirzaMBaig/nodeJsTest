import {Headers, Http, RequestMethod, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {ErrorResponse} from "./ErrorResponse";
import {ServerResponseBarService} from "../serverResponseBar/serverResponseBar.service";

@Injectable()
export class HttpService {

  private actionUrl: string;
  private headers: Headers;

  constructor(private _http: Http, private serverResponseService: ServerResponseBarService) {
    this.actionUrl = "http://localhost:9090/ecom/";
    //this.actionUrl = environment.serverWithApiUrl;

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

  }

  public getHttp() {
    return this._http;
  }

  public getHeader() {
    return this.headers;
  }

  public remoteUrl(): String {
    return this.actionUrl;
  }

  public request(url: string, requestBody: any, method: RequestMethod): Promise<any> {

    this.serverResponseService.resetServerMessage();

    if(RequestMethod.Get != method) {
      this.serverResponseService.serverMessage = RequestMethod.Post == method ? "Saved Successfully!!!" : "Updated Successfully!!!";
    }

    return this.getHttp().request(this.remoteUrl().concat(url),
      {
        body: JSON.stringify(requestBody),
        headers: this.getHeader(),
        method: method
      })
      .map(res => res.json())
      .toPromise()
      .catch(error => this.handleError(error));
  };

  public post(url: string, requestBody: any): Promise<any> {
    this.serverResponseService.resetServerMessage();
    return this.request(url, requestBody, RequestMethod.Post);
  };

  public put(url: string, requestBody: any): Promise<any> {
    this.serverResponseService.resetServerMessage();
    return this.request(url, requestBody, RequestMethod.Put);
  };

  public get(url: string): Promise<any> {
    this.serverResponseService.resetServerMessage();
    return this.request(url, "", RequestMethod.Get);
  };

  public handleError(error: Response) {
    this.serverResponseService.resetServerMessage();
    let serverErrors = [];
    let er = error.json() as ErrorResponse;
    if (er.errorMessage) {
      serverErrors.push(er.errorMessage);
    }
    if (er.validationErrors) {
      for (let det of er.validationErrors) {
        serverErrors.push(det.message);
      }
    }
    this.serverResponseService.serverErrors = serverErrors;
    throw serverErrors;
  }

}
