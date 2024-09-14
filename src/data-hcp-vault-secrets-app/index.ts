/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.96.0/docs/data-sources/vault_secrets_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpVaultSecretsAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Vault Secrets application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.96.0/docs/data-sources/vault_secrets_app#app_name DataHcpVaultSecretsApp#app_name}
  */
  readonly appName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.96.0/docs/data-sources/vault_secrets_app hcp_vault_secrets_app}
*/
export class DataHcpVaultSecretsApp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcpVaultSecretsApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcpVaultSecretsApp to import
  * @param importFromId The id of the existing DataHcpVaultSecretsApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.96.0/docs/data-sources/vault_secrets_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcpVaultSecretsApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_secrets_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.96.0/docs/data-sources/vault_secrets_app hcp_vault_secrets_app} Data Source
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
        providerVersion: '0.96.0',
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
