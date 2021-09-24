/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.
 *
 * OpenAPI spec version: 0.12.2
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CertificateControllerService {

    protected basePath = 'https://api.maritimeconnectivity.net';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * getCRL
     * 
     * @param caAlias caAlias
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCRLUsingGET(caAlias: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getCRLUsingGET(caAlias: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getCRLUsingGET(caAlias: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getCRLUsingGET(caAlias: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caAlias === null || caAlias === undefined) {
            throw new Error('Required parameter caAlias was null or undefined when calling getCRLUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/x-pem-file;charset=UTF-8'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/oidc/api/certificates/crl/${encodeURIComponent(String(caAlias))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCRL
     * 
     * @param caAlias caAlias
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCRLUsingGET1(caAlias: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getCRLUsingGET1(caAlias: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getCRLUsingGET1(caAlias: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getCRLUsingGET1(caAlias: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caAlias === null || caAlias === undefined) {
            throw new Error('Required parameter caAlias was null or undefined when calling getCRLUsingGET1.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/x-pem-file;charset=UTF-8'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/x509/api/certificates/crl/${encodeURIComponent(String(caAlias))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getOCSP
     * 
     * @param caAlias caAlias
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOCSPUsingGET(caAlias: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getOCSPUsingGET(caAlias: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getOCSPUsingGET(caAlias: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getOCSPUsingGET(caAlias: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caAlias === null || caAlias === undefined) {
            throw new Error('Required parameter caAlias was null or undefined when calling getOCSPUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/ocsp-response'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/oidc/api/certificates/ocsp/${encodeURIComponent(String(caAlias))}/**`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getOCSP
     * 
     * @param caAlias caAlias
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOCSPUsingGET1(caAlias: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getOCSPUsingGET1(caAlias: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getOCSPUsingGET1(caAlias: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getOCSPUsingGET1(caAlias: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caAlias === null || caAlias === undefined) {
            throw new Error('Required parameter caAlias was null or undefined when calling getOCSPUsingGET1.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/ocsp-response'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/x509/api/certificates/ocsp/${encodeURIComponent(String(caAlias))}/**`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * postOCSP
     * 
     * @param caAlias caAlias
     * @param input input
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postOCSPUsingPOST(caAlias: string, input: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postOCSPUsingPOST(caAlias: string, input: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postOCSPUsingPOST(caAlias: string, input: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postOCSPUsingPOST(caAlias: string, input: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caAlias === null || caAlias === undefined) {
            throw new Error('Required parameter caAlias was null or undefined when calling postOCSPUsingPOST.');
        }

        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling postOCSPUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/ocsp-response'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/ocsp-request'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/oidc/api/certificates/ocsp/${encodeURIComponent(String(caAlias))}`,
            input,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * postOCSP
     * 
     * @param caAlias caAlias
     * @param input input
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postOCSPUsingPOST1(caAlias: string, input: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postOCSPUsingPOST1(caAlias: string, input: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postOCSPUsingPOST1(caAlias: string, input: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postOCSPUsingPOST1(caAlias: string, input: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caAlias === null || caAlias === undefined) {
            throw new Error('Required parameter caAlias was null or undefined when calling postOCSPUsingPOST1.');
        }

        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling postOCSPUsingPOST1.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/ocsp-response'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/ocsp-request'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/x509/api/certificates/ocsp/${encodeURIComponent(String(caAlias))}`,
            input,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
