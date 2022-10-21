// https://www.terraform.io/docs/providers/hcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HcpProviderConfig {
  /**
  * The OAuth2 Client ID for API operations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp#client_id HcpProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The OAuth2 Client Secret for API operations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp#client_secret HcpProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp#alias HcpProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/hcp hcp}
*/
export class HcpProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/hcp hcp} Resource
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
        providerVersion: '0.46.0',
        providerVersionConstraint: '~> 0.45'
      },
      terraformProviderSource: 'hcp'
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
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
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
