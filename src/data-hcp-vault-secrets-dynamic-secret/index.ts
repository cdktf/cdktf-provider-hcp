/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/data-sources/vault_secrets_dynamic_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpVaultSecretsDynamicSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Vault Secrets application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/data-sources/vault_secrets_dynamic_secret#app_name DataHcpVaultSecretsDynamicSecret#app_name}
  */
  readonly appName: string;
  /**
  * The name of the Vault Secrets secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/data-sources/vault_secrets_dynamic_secret#secret_name DataHcpVaultSecretsDynamicSecret#secret_name}
  */
  readonly secretName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/data-sources/vault_secrets_dynamic_secret hcp_vault_secrets_dynamic_secret}
*/
export class DataHcpVaultSecretsDynamicSecret extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_dynamic_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcpVaultSecretsDynamicSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcpVaultSecretsDynamicSecret to import
  * @param importFromId The id of the existing DataHcpVaultSecretsDynamicSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/data-sources/vault_secrets_dynamic_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcpVaultSecretsDynamicSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_secrets_dynamic_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.99.0/docs/data-sources/vault_secrets_dynamic_secret hcp_vault_secrets_dynamic_secret} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpVaultSecretsDynamicSecretConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpVaultSecretsDynamicSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_secrets_dynamic_secret',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.99.0',
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
