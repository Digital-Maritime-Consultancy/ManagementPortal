/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { AppConfig } from '../../../app.config';


@Injectable()
export class CertificateControllerService {

    protected basePath = AppConfig.IR_BASE_PATH;
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
     * 
     * 
     * @param caAlias 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCRL(caAlias: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getCRL(caAlias: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getCRL(caAlias: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getCRL(caAlias: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caAlias === null || caAlias === undefined) {
            throw new Error('Required parameter caAlias was null or undefined when calling getCRL.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/x-pem-file'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('get',`${this.basePath}/oidc/api/certificates/crl/${encodeURIComponent(String(caAlias))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param caAlias 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCRL1(caAlias: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getCRL1(caAlias: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getCRL1(caAlias: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getCRL1(caAlias: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caAlias === null || caAlias === undefined) {
            throw new Error('Required parameter caAlias was null or undefined when calling getCRL1.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/x-pem-file'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('get',`${this.basePath}/x509/api/certificates/crl/${encodeURIComponent(String(caAlias))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param caAlias 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOCSP(caAlias: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getOCSP(caAlias: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getOCSP(caAlias: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getOCSP(caAlias: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caAlias === null || caAlias === undefined) {
            throw new Error('Required parameter caAlias was null or undefined when calling getOCSP.');
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

        return this.httpClient.request<any>('get',`${this.basePath}/oidc/api/certificates/ocsp/${encodeURIComponent(String(caAlias))}/**`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param caAlias 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOCSP1(caAlias: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getOCSP1(caAlias: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getOCSP1(caAlias: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getOCSP1(caAlias: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (caAlias === null || caAlias === undefined) {
            throw new Error('Required parameter caAlias was null or undefined when calling getOCSP1.');
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

        return this.httpClient.request<any>('get',`${this.basePath}/x509/api/certificates/ocsp/${encodeURIComponent(String(caAlias))}/**`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param caAlias 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postOCSP(body: Array<string>, caAlias: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postOCSP(body: Array<string>, caAlias: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postOCSP(body: Array<string>, caAlias: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postOCSP(body: Array<string>, caAlias: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postOCSP.');
        }

        if (caAlias === null || caAlias === undefined) {
            throw new Error('Required parameter caAlias was null or undefined when calling postOCSP.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/oidc/api/certificates/ocsp/${encodeURIComponent(String(caAlias))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param caAlias 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postOCSP1(body: Array<string>, caAlias: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postOCSP1(body: Array<string>, caAlias: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postOCSP1(body: Array<string>, caAlias: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postOCSP1(body: Array<string>, caAlias: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postOCSP1.');
        }

        if (caAlias === null || caAlias === undefined) {
            throw new Error('Required parameter caAlias was null or undefined when calling postOCSP1.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/x509/api/certificates/ocsp/${encodeURIComponent(String(caAlias))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
