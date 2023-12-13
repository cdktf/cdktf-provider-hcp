// https://registry.terraform.io/providers/hashicorp/hcp/0.78.0/docs/resources/vault_secrets_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultSecretsSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the application the secret can be found in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.78.0/docs/resources/vault_secrets_secret#app_name VaultSecretsSecret#app_name}
  */
  readonly appName: string;
  /**
  * The name of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.78.0/docs/resources/vault_secrets_secret#secret_name VaultSecretsSecret#secret_name}
  */
  readonly secretName: string;
  /**
  * The value of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.78.0/docs/resources/vault_secrets_secret#secret_value VaultSecretsSecret#secret_value}
  */
  readonly secretValue: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.78.0/docs/resources/vault_secrets_secret hcp_vault_secrets_secret}
*/
export class VaultSecretsSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultSecretsSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultSecretsSecret to import
  * @param importFromId The id of the existing VaultSecretsSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.78.0/docs/resources/vault_secrets_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultSecretsSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_secrets_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.78.0/docs/resources/vault_secrets_secret hcp_vault_secrets_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultSecretsSecretConfig
  */
  public constructor(scope: Construct, id: string, config: VaultSecretsSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_secrets_secret',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.78.0',
        providerVersionConstraint: '~> 0.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appName = config.appName;
    this._secretName = config.secretName;
    this._secretValue = config.secretValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_value - computed: false, optional: false, required: true
  private _secretValue?: string; 
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }
  public set secretValue(value: string) {
    this._secretValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      secret_name: cdktf.stringToTerraform(this._secretName),
      secret_value: cdktf.stringToTerraform(this._secretValue),
    };
  }
}
