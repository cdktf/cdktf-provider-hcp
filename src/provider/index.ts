/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HcpProviderConfig {
  /**
  * The OAuth2 Client ID for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs#client_id HcpProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The OAuth2 Client Secret for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs#client_secret HcpProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The path to an HCP credential file to use to authenticate the provider to HCP. You can alternatively set the HCP_CRED_FILE environment variable to point at a credential file as well. Using a credential file allows you to authenticate the provider as a service principal via client credentials or dynamically based on Workload Identity Federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs#credential_file HcpProvider#credential_file}
  */
  readonly credentialFile?: string;
  /**
  * The geography in which HCP resources should be created. Default is `us`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs#geography HcpProvider#geography}
  */
  readonly geography?: string;
  /**
  * The default project in which resources should be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs#project_id HcpProvider#project_id}
  */
  readonly projectId?: string;
  /**
  * When set to true, the provider will skip checking the HCP status page for service outages or returning warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs#skip_status_check HcpProvider#skip_status_check}
  */
  readonly skipStatusCheck?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs#alias HcpProvider#alias}
  */
  readonly alias?: string;
  /**
  * workload_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs#workload_identity HcpProvider#workload_identity}
  */
  readonly workloadIdentity?: HcpProviderWorkloadIdentity[] | cdktf.IResolvable;
}
export interface HcpProviderWorkloadIdentity {
  /**
  * The resource_name of the Workload Identity Provider to exchange the token with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs#resource_name HcpProvider#resource_name}
  */
  readonly resourceName: string;
  /**
  * The JWT token retrieved from an OpenID Connect (OIDC) or OAuth2 provider. At least one of `token_file` or `token` must be set, if both are set then `token` takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs#token HcpProvider#token}
  */
  readonly token?: string;
  /**
  * The path to a file containing a JWT token retrieved from an OpenID Connect (OIDC) or OAuth2 provider. At least one of `token_file` or `token` must be set, if both are set then `token` takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs#token_file HcpProvider#token_file}
  */
  readonly tokenFile?: string;
}

export function hcpProviderWorkloadIdentityToTerraform(struct?: HcpProviderWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    token: cdktf.stringToTerraform(struct!.token),
    token_file: cdktf.stringToTerraform(struct!.tokenFile),
  }
}


export function hcpProviderWorkloadIdentityToHclTerraform(struct?: HcpProviderWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_file: {
      value: cdktf.stringToHclTerraform(struct!.tokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs hcp}
*/
export class HcpProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HcpProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HcpProvider to import
  * @param importFromId The id of the existing HcpProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HcpProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs hcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HcpProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HcpProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hcp',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.111.0',
        providerVersionConstraint: '~> 0.45'
      },
      terraformProviderSource: 'hcp'
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._credentialFile = config.credentialFile;
    this._geography = config.geography;
    this._projectId = config.projectId;
    this._skipStatusCheck = config.skipStatusCheck;
    this._alias = config.alias;
    this._workloadIdentity = config.workloadIdentity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // credential_file - computed: false, optional: true, required: false
  private _credentialFile?: string; 
  public get credentialFile() {
    return this._credentialFile;
  }
  public set credentialFile(value: string | undefined) {
    this._credentialFile = value;
  }
  public resetCredentialFile() {
    this._credentialFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialFileInput() {
    return this._credentialFile;
  }

  // geography - computed: false, optional: true, required: false
  private _geography?: string; 
  public get geography() {
    return this._geography;
  }
  public set geography(value: string | undefined) {
    this._geography = value;
  }
  public resetGeography() {
    this._geography = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geographyInput() {
    return this._geography;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this._projectId;
  }
  public set projectId(value: string | undefined) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // skip_status_check - computed: false, optional: true, required: false
  private _skipStatusCheck?: boolean | cdktf.IResolvable; 
  public get skipStatusCheck() {
    return this._skipStatusCheck;
  }
  public set skipStatusCheck(value: boolean | cdktf.IResolvable | undefined) {
    this._skipStatusCheck = value;
  }
  public resetSkipStatusCheck() {
    this._skipStatusCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipStatusCheckInput() {
    return this._skipStatusCheck;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // workload_identity - computed: false, optional: true, required: false
  private _workloadIdentity?: HcpProviderWorkloadIdentity[] | cdktf.IResolvable; 
  public get workloadIdentity() {
    return this._workloadIdentity;
  }
  public set workloadIdentity(value: HcpProviderWorkloadIdentity[] | cdktf.IResolvable | undefined) {
    this._workloadIdentity = value;
  }
  public resetWorkloadIdentity() {
    this._workloadIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityInput() {
    return this._workloadIdentity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      credential_file: cdktf.stringToTerraform(this._credentialFile),
      geography: cdktf.stringToTerraform(this._geography),
      project_id: cdktf.stringToTerraform(this._projectId),
      skip_status_check: cdktf.booleanToTerraform(this._skipStatusCheck),
      alias: cdktf.stringToTerraform(this._alias),
      workload_identity: cdktf.listMapper(hcpProviderWorkloadIdentityToTerraform, true)(this._workloadIdentity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_file: {
        value: cdktf.stringToHclTerraform(this._credentialFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geography: {
        value: cdktf.stringToHclTerraform(this._geography),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_status_check: {
        value: cdktf.booleanToHclTerraform(this._skipStatusCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_identity: {
        value: cdktf.listMapperHcl(hcpProviderWorkloadIdentityToHclTerraform, true)(this._workloadIdentity),
        isBlock: true,
        type: "list",
        storageClassType: "HcpProviderWorkloadIdentityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
