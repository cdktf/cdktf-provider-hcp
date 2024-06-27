// https://registry.terraform.io/providers/hashicorp/hcp/0.93.0/docs/data-sources/vault_secrets_rotating_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpVaultSecretsRotatingSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Vault Secrets application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.93.0/docs/data-sources/vault_secrets_rotating_secret#app_name DataHcpVaultSecretsRotatingSecret#app_name}
  */
  readonly appName: string;
  /**
  * The name of the Vault Secrets secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.93.0/docs/data-sources/vault_secrets_rotating_secret#secret_name DataHcpVaultSecretsRotatingSecret#secret_name}
  */
  readonly secretName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.93.0/docs/data-sources/vault_secrets_rotating_secret hcp_vault_secrets_rotating_secret}
*/
export class DataHcpVaultSecretsRotatingSecret extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_rotating_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcpVaultSecretsRotatingSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcpVaultSecretsRotatingSecret to import
  * @param importFromId The id of the existing DataHcpVaultSecretsRotatingSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.93.0/docs/data-sources/vault_secrets_rotating_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcpVaultSecretsRotatingSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_secrets_rotating_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.93.0/docs/data-sources/vault_secrets_rotating_secret hcp_vault_secrets_rotating_secret} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpVaultSecretsRotatingSecretConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpVaultSecretsRotatingSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_secrets_rotating_secret',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.93.0',
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

  // secret_provider - computed: true, optional: false, required: false
  public get secretProvider() {
    return this.getStringAttribute('secret_provider');
  }

  // secret_values - computed: true, optional: false, required: false
  private _secretValues = new cdktf.StringMap(this, "secret_values");
  public get secretValues() {
    return this._secretValues;
  }

  // secret_version - computed: true, optional: false, required: false
  public get secretVersion() {
    return this.getNumberAttribute('secret_version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      secret_name: cdktf.stringToTerraform(this._secretName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_name: {
        value: cdktf.stringToHclTerraform(this._secretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
