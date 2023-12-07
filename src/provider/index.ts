// https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HcpProviderConfig {
  /**
  * The OAuth2 Client ID for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs#client_id HcpProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The OAuth2 Client Secret for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs#client_secret HcpProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The path to an HCP credential file to use to authenticate the provider to HCP. You can alternatively set the HCP_CRED_FILE environment variable to point at a credential file as well. Using a credential file allows you to authenticate the provider as a service principal via client credentials or dynamically based on Workload Identity Federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs#credential_file HcpProvider#credential_file}
  */
  readonly credentialFile?: string;
  /**
  * The default project in which resources should be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs#project_id HcpProvider#project_id}
  */
  readonly projectId?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs#alias HcpProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs hcp}
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
  * @param importFromId The id of the existing HcpProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HcpProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs hcp} Resource
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
        providerVersion: '0.77.0',
        providerVersionConstraint: '~> 0.45'
      },
      terraformProviderSource: 'hcp'
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._credentialFile = config.credentialFile;
    this._projectId = config.projectId;
    this._alias = config.alias;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      credential_file: cdktf.stringToTerraform(this._credentialFile),
      project_id: cdktf.stringToTerraform(this._projectId),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
