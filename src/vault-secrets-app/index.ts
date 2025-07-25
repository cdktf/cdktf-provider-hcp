/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_secrets_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultSecretsAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Vault Secrets App name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_secrets_app#app_name VaultSecretsApp#app_name}
  */
  readonly appName: string;
  /**
  * The Vault Secrets app description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_secrets_app#description VaultSecretsApp#description}
  */
  readonly description?: string;
  /**
  * The ID of the HCP project where the HCP Vault Secrets app is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_secrets_app#project_id VaultSecretsApp#project_id}
  */
  readonly projectId?: string;
  /**
  * Set of sync names to associate with this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_secrets_app#sync_names VaultSecretsApp#sync_names}
  */
  readonly syncNames?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_secrets_app hcp_vault_secrets_app}
*/
export class VaultSecretsApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultSecretsApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultSecretsApp to import
  * @param importFromId The id of the existing VaultSecretsApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_secrets_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultSecretsApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_secrets_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_secrets_app hcp_vault_secrets_app} Resource
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
        providerVersion: '0.109.0',
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
    this._projectId = config.projectId;
    this._syncNames = config.syncNames;
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

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // sync_names - computed: false, optional: true, required: false
  private _syncNames?: string[]; 
  public get syncNames() {
    return cdktf.Fn.tolist(this.getListAttribute('sync_names'));
  }
  public set syncNames(value: string[]) {
    this._syncNames = value;
  }
  public resetSyncNames() {
    this._syncNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncNamesInput() {
    return this._syncNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      description: cdktf.stringToTerraform(this._description),
      project_id: cdktf.stringToTerraform(this._projectId),
      sync_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._syncNames),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      sync_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._syncNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
