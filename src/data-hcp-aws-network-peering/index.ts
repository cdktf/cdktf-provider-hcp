/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/aws_network_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpAwsNetworkPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the HashiCorp Virtual Network (HVN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/aws_network_peering#hvn_id DataHcpAwsNetworkPeering#hvn_id}
  */
  readonly hvnId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/aws_network_peering#id DataHcpAwsNetworkPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the network peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/aws_network_peering#peering_id DataHcpAwsNetworkPeering#peering_id}
  */
  readonly peeringId: string;
  /**
  * 
  * The ID of the HCP project where the network peering is located. Always matches the HVN's project.
  * If not specified, the project specified in the HCP Provider config block will be used, if configured.
  * If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/aws_network_peering#project_id DataHcpAwsNetworkPeering#project_id}
  */
  readonly projectId?: string;
  /**
  * If `true`, Terraform will wait for the network peering to reach an `ACTIVE` state before continuing. Default `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/aws_network_peering#wait_for_active_state DataHcpAwsNetworkPeering#wait_for_active_state}
  */
  readonly waitForActiveState?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/aws_network_peering#timeouts DataHcpAwsNetworkPeering#timeouts}
  */
  readonly timeouts?: DataHcpAwsNetworkPeeringTimeouts;
}
export interface DataHcpAwsNetworkPeeringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/aws_network_peering#read DataHcpAwsNetworkPeering#read}
  */
  readonly read?: string;
}

export function dataHcpAwsNetworkPeeringTimeoutsToTerraform(struct?: DataHcpAwsNetworkPeeringTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataHcpAwsNetworkPeeringTimeoutsToHclTerraform(struct?: DataHcpAwsNetworkPeeringTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHcpAwsNetworkPeeringTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHcpAwsNetworkPeeringTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcpAwsNetworkPeeringTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/aws_network_peering hcp_aws_network_peering}
*/
export class DataHcpAwsNetworkPeering extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_aws_network_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcpAwsNetworkPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcpAwsNetworkPeering to import
  * @param importFromId The id of the existing DataHcpAwsNetworkPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/aws_network_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcpAwsNetworkPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_aws_network_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/aws_network_peering hcp_aws_network_peering} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpAwsNetworkPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpAwsNetworkPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_aws_network_peering',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.106.0',
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
    this._peeringId = config.peeringId;
    this._projectId = config.projectId;
    this._waitForActiveState = config.waitForActiveState;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
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

  // peer_account_id - computed: true, optional: false, required: false
  public get peerAccountId() {
    return this.getStringAttribute('peer_account_id');
  }

  // peer_vpc_id - computed: true, optional: false, required: false
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }

  // peer_vpc_region - computed: true, optional: false, required: false
  public get peerVpcRegion() {
    return this.getStringAttribute('peer_vpc_region');
  }

  // peering_id - computed: false, optional: false, required: true
  private _peeringId?: string; 
  public get peeringId() {
    return this.getStringAttribute('peering_id');
  }
  public set peeringId(value: string) {
    this._peeringId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringIdInput() {
    return this._peeringId;
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

  // provider_peering_id - computed: true, optional: false, required: false
  public get providerPeeringId() {
    return this.getStringAttribute('provider_peering_id');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // wait_for_active_state - computed: false, optional: true, required: false
  private _waitForActiveState?: boolean | cdktf.IResolvable; 
  public get waitForActiveState() {
    return this.getBooleanAttribute('wait_for_active_state');
  }
  public set waitForActiveState(value: boolean | cdktf.IResolvable) {
    this._waitForActiveState = value;
  }
  public resetWaitForActiveState() {
    this._waitForActiveState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForActiveStateInput() {
    return this._waitForActiveState;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataHcpAwsNetworkPeeringTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataHcpAwsNetworkPeeringTimeouts) {
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
      peering_id: cdktf.stringToTerraform(this._peeringId),
      project_id: cdktf.stringToTerraform(this._projectId),
      wait_for_active_state: cdktf.booleanToTerraform(this._waitForActiveState),
      timeouts: dataHcpAwsNetworkPeeringTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hvn_id: {
        value: cdktf.stringToHclTerraform(this._hvnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_id: {
        value: cdktf.stringToHclTerraform(this._peeringId),
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
      wait_for_active_state: {
        value: cdktf.booleanToHclTerraform(this._waitForActiveState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: dataHcpAwsNetworkPeeringTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataHcpAwsNetworkPeeringTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
