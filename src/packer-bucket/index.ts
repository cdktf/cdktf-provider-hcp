/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/packer_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackerBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * The bucket's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/packer_bucket#name PackerBucket#name}
  */
  readonly name: string;
  /**
  * The ID of the project to create the bucket under. If unspecified, the bucket will be created in the project the provider is configured with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/packer_bucket#project_id PackerBucket#project_id}
  */
  readonly projectId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/packer_bucket hcp_packer_bucket}
*/
export class PackerBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_packer_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackerBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackerBucket to import
  * @param importFromId The id of the existing PackerBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/packer_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackerBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_packer_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/packer_bucket hcp_packer_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackerBucketConfig
  */
  public constructor(scope: Construct, id: string, config: PackerBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_packer_bucket',
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
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
