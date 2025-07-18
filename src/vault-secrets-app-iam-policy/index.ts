/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_secrets_app_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultSecretsAppIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The policy to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_secrets_app_iam_policy#policy_data VaultSecretsAppIamPolicy#policy_data}
  */
  readonly policyData: string;
  /**
  * The app's resource name in the format secrets/project/<project ID>/app/<app Name>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_secrets_app_iam_policy#resource_name VaultSecretsAppIamPolicy#resource_name}
  */
  readonly resourceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_secrets_app_iam_policy hcp_vault_secrets_app_iam_policy}
*/
export class VaultSecretsAppIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_app_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultSecretsAppIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultSecretsAppIamPolicy to import
  * @param importFromId The id of the existing VaultSecretsAppIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_secrets_app_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultSecretsAppIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_secrets_app_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/vault_secrets_app_iam_policy hcp_vault_secrets_app_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultSecretsAppIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: VaultSecretsAppIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_secrets_app_iam_policy',
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
    this._policyData = config.policyData;
    this._resourceName = config.resourceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData?: string; 
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }
  public set policyData(value: string) {
    this._policyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDataInput() {
    return this._policyData;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_data: cdktf.stringToTerraform(this._policyData),
      resource_name: cdktf.stringToTerraform(this._resourceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_data: {
        value: cdktf.stringToHclTerraform(this._policyData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
