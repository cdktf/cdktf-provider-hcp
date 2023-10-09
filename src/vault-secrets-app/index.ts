// https://registry.terraform.io/providers/hashicorp/hcp/0.72.2/docs/resources/vault_secrets_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultSecretsAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Vault Secrets App name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.2/docs/resources/vault_secrets_app#app_name VaultSecretsApp#app_name}
  */
  readonly appName: string;
  /**
  * The Vault Secrets app description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.2/docs/resources/vault_secrets_app#description VaultSecretsApp#description}
  */
  readonly description?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.2/docs/resources/vault_secrets_app hcp_vault_secrets_app}
*/
export class VaultSecretsApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.72.2/docs/resources/vault_secrets_app hcp_vault_secrets_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultSecretsAppConfig
  */
  public constructor(scope: Construct, id: string, config: VaultSecretsAppConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_secrets_app',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.72.2',
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
    this._description = config.description;
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      description: cdktf.stringToTerraform(this._description),
    };
  }
}
