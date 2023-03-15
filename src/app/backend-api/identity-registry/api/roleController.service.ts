/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.
 *
 * OpenAPI spec version: 1.1.0
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

import { Role } from '../model/role';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { AppConfig } from '../../../app.config';


@Injectable()
export class RoleControllerService {

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
     * Create a new role mapping
     * @param body 
     * @param orgMrn 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createRole(body: Role, orgMrn: string, observe?: 'body', reportProgress?: boolean): Observable<Role>;
    public createRole(body: Role, orgMrn: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Role>>;
    public createRole(body: Role, orgMrn: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Role>>;
    public createRole(body: Role, orgMrn: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createRole.');
        }

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling createRole.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Role>('post',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role`,
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
     * Delete a specific role mapping
     * @param orgMrn 
     * @param roleId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteRole(orgMrn: string, roleId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteRole(orgMrn: string, roleId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteRole(orgMrn: string, roleId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteRole(orgMrn: string, roleId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling deleteRole.');
        }

        if (roleId === null || roleId === undefined) {
            throw new Error('Required parameter roleId was null or undefined when calling deleteRole.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role/${encodeURIComponent(String(roleId))}`,
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
     * Get the list of available roles
     * @param orgMrn 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAvailableRoles(orgMrn: string, observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public getAvailableRoles(orgMrn: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public getAvailableRoles(orgMrn: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public getAvailableRoles(orgMrn: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getAvailableRoles.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<string>>('get',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role/available-roles`,
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
     * Get the list of roles of the requesting user
     * @param orgMrn 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMyRole(orgMrn: string, observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public getMyRole(orgMrn: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public getMyRole(orgMrn: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public getMyRole(orgMrn: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getMyRole.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<string>>('get',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role/myroles`,
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
     * Get a specific role mapping
     * @param orgMrn 
     * @param roleId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRole(orgMrn: string, roleId: number, observe?: 'body', reportProgress?: boolean): Observable<Role>;
    public getRole(orgMrn: string, roleId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Role>>;
    public getRole(orgMrn: string, roleId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Role>>;
    public getRole(orgMrn: string, roleId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getRole.');
        }

        if (roleId === null || roleId === undefined) {
            throw new Error('Required parameter roleId was null or undefined when calling getRole.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Role>('get',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role/${encodeURIComponent(String(roleId))}`,
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
     * Get the list of role mappings for the specified organization
     * @param orgMrn 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRoles(orgMrn: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Role>>;
    public getRoles(orgMrn: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Role>>>;
    public getRoles(orgMrn: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Role>>>;
    public getRoles(orgMrn: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getRoles.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Role>>('get',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/roles`,
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
     * Update a specific role mapping
     * @param body 
     * @param orgMrn 
     * @param roleId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateRole(body: Role, orgMrn: string, roleId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateRole(body: Role, orgMrn: string, roleId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateRole(body: Role, orgMrn: string, roleId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateRole(body: Role, orgMrn: string, roleId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateRole.');
        }

        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling updateRole.');
        }

        if (roleId === null || roleId === undefined) {
            throw new Error('Required parameter roleId was null or undefined when calling updateRole.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put',`${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role/${encodeURIComponent(String(roleId))}`,
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
