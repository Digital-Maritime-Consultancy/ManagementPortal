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
 */
import { PageableObject } from './pageableObject';
import { Sort } from './sort';
import { User } from './user';

export interface PageUser { 
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: Array<User>;
    number?: number;
    sort?: Sort;
    pageable?: PageableObject;
    numberOfElements?: number;
    last?: boolean;
    first?: boolean;
    empty?: boolean;
}