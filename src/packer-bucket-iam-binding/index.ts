/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/packer_bucket_iam_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackerBucketIamBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The principal to bind to the given role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/packer_bucket_iam_binding#principal_id PackerBucketIamBinding#principal_id}
  */
  readonly principalId: string;
  /**
  * The bucket's resource name in the format packer/project/<project ID>/bucket/<bucket name>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/packer_bucket_iam_binding#resource_name PackerBucketIamBinding#resource_name}
  */
  readonly resourceName: string;
  /**
  * The role name to bind to the given principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/packer_bucket_iam_binding#role PackerBucketIamBinding#role}
  */
  readonly role: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/packer_bucket_iam_binding hcp_packer_bucket_iam_binding}
*/
export class PackerBucketIamBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_packer_bucket_iam_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackerBucketIamBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackerBucketIamBinding to import
  * @param importFromId The id of the existing PackerBucketIamBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/packer_bucket_iam_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackerBucketIamBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_packer_bucket_iam_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/packer_bucket_iam_binding hcp_packer_bucket_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackerBucketIamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: PackerBucketIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_packer_bucket_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.108.0',
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
    this._principalId = config.principalId;
    this._resourceName = config.resourceName;
    this._role = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      principal_id: cdktf.stringToTerraform(this._principalId),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      role: cdktf.stringToTerraform(this._role),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      principal_id: {
        value: cdktf.stringToHclTerraform(this._principalId),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
