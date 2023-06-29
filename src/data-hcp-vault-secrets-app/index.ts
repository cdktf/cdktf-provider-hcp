// https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_secrets_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpVaultSecretsAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Vault Secrets application.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_secrets_app#app_name DataHcpVaultSecretsApp#app_name}
  */
  readonly appName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_secrets_app#id DataHcpVaultSecretsApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_secrets_app hcp_vault_secrets_app}
*/
export class DataHcpVaultSecretsApp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_secrets_app hcp_vault_secrets_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpVaultSecretsAppConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpVaultSecretsAppConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_secrets_app',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.62.0',
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
    this._id = config.id;
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new cdktf.StringMap(this, "secrets");
  public get secrets() {
    return this._secrets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
