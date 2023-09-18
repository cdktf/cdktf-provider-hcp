/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/azure_peering_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpAzurePeeringConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `self_link` of the HashiCorp Virtual Network (HVN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/azure_peering_connection#hvn_link DataHcpAzurePeeringConnection#hvn_link}
  */
  readonly hvnLink: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/azure_peering_connection#id DataHcpAzurePeeringConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the peering connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/azure_peering_connection#peering_id DataHcpAzurePeeringConnection#peering_id}
  */
  readonly peeringId: string;
  /**
  * If `true`, Terraform will wait for the peering connection to reach an `ACTIVE` state before continuing. Default `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/azure_peering_connection#wait_for_active_state DataHcpAzurePeeringConnection#wait_for_active_state}
  */
  readonly waitForActiveState?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/azure_peering_connection#timeouts DataHcpAzurePeeringConnection#timeouts}
  */
  readonly timeouts?: DataHcpAzurePeeringConnectionTimeouts;
}
export interface DataHcpAzurePeeringConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/azure_peering_connection#read DataHcpAzurePeeringConnection#read}
  */
  readonly read?: string;
}

export function dataHcpAzurePeeringConnectionTimeoutsToTerraform(struct?: DataHcpAzurePeeringConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataHcpAzurePeeringConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHcpAzurePeeringConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataHcpAzurePeeringConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/azure_peering_connection hcp_azure_peering_connection}
*/
export class DataHcpAzurePeeringConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_azure_peering_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.70.0/docs/data-sources/azure_peering_connection hcp_azure_peering_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpAzurePeeringConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpAzurePeeringConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_azure_peering_connection',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.70.0',
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
    this._hvnLink = config.hvnLink;
    this._id = config.id;
    this._peeringId = config.peeringId;
    this._waitForActiveState = config.waitForActiveState;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // azure_peering_id - computed: true, optional: false, required: false
  public get azurePeeringId() {
    return this.getStringAttribute('azure_peering_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // hvn_link - computed: false, optional: false, required: true
  private _hvnLink?: string; 
  public get hvnLink() {
    return this.getStringAttribute('hvn_link');
  }
  public set hvnLink(value: string) {
    this._hvnLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hvnLinkInput() {
    return this._hvnLink;
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

  // peer_resource_group_name - computed: true, optional: false, required: false
  public get peerResourceGroupName() {
    return this.getStringAttribute('peer_resource_group_name');
  }

  // peer_subscription_id - computed: true, optional: false, required: false
  public get peerSubscriptionId() {
    return this.getStringAttribute('peer_subscription_id');
  }

  // peer_tenant_id - computed: true, optional: false, required: false
  public get peerTenantId() {
    return this.getStringAttribute('peer_tenant_id');
  }

  // peer_vnet_name - computed: true, optional: false, required: false
  public get peerVnetName() {
    return this.getStringAttribute('peer_vnet_name');
  }

  // peer_vnet_region - computed: true, optional: false, required: false
  public get peerVnetRegion() {
    return this.getStringAttribute('peer_vnet_region');
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
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
  private _timeouts = new DataHcpAzurePeeringConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataHcpAzurePeeringConnectionTimeouts) {
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
      hvn_link: cdktf.stringToTerraform(this._hvnLink),
      id: cdktf.stringToTerraform(this._id),
      peering_id: cdktf.stringToTerraform(this._peeringId),
      wait_for_active_state: cdktf.booleanToTerraform(this._waitForActiveState),
      timeouts: dataHcpAzurePeeringConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
