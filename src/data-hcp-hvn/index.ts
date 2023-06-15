/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpHvnConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the HashiCorp Virtual Network (HVN).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn#hvn_id DataHcpHvn#hvn_id}
  */
  readonly hvnId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn#id DataHcpHvn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the HCP project where the HVN is located.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn#project_id DataHcpHvn#project_id}
  */
  readonly projectId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn#timeouts DataHcpHvn#timeouts}
  */
  readonly timeouts?: DataHcpHvnTimeouts;
}
export interface DataHcpHvnTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn#default DataHcpHvn#default}
  */
  readonly default?: string;
}

export function dataHcpHvnTimeoutsToTerraform(struct?: DataHcpHvnTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class DataHcpHvnTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHcpHvnTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcpHvnTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn hcp_hvn}
*/
export class DataHcpHvn extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_hvn";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.61.0/docs/data-sources/hvn hcp_hvn} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpHvnConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpHvnConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_hvn',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.61.0',
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
    this._hvnId = config.hvnId;
    this._id = config.id;
    this._projectId = config.projectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // hvn_id - computed: false, optional: false, required: true
  private _hvnId?: string; 
  public get hvnId() {
    return this.getStringAttribute('hvn_id');
  }
  public set hvnId(value: string) {
    this._hvnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hvnIdInput() {
    return this._hvnId;
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

  // provider_account_id - computed: true, optional: false, required: false
  public get providerAccountId() {
    return this.getStringAttribute('provider_account_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataHcpHvnTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataHcpHvnTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hvn_id: cdktf.stringToTerraform(this._hvnId),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      timeouts: dataHcpHvnTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
