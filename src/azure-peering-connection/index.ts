// https://www.terraform.io/docs/providers/hcp/r/azure_peering_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzurePeeringConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `self_link` of the HashiCorp Virtual Network (HVN).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/azure_peering_connection#hvn_link AzurePeeringConnection#hvn_link}
  */
  readonly hvnLink: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/azure_peering_connection#id AzurePeeringConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource group name of the peer VNet in Azure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/azure_peering_connection#peer_resource_group_name AzurePeeringConnection#peer_resource_group_name}
  */
  readonly peerResourceGroupName: string;
  /**
  * The subscription ID of the peer VNet in Azure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/azure_peering_connection#peer_subscription_id AzurePeeringConnection#peer_subscription_id}
  */
  readonly peerSubscriptionId: string;
  /**
  * The tenant ID of the peer VNet in Azure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/azure_peering_connection#peer_tenant_id AzurePeeringConnection#peer_tenant_id}
  */
  readonly peerTenantId: string;
  /**
  * The name of the peer VNet in Azure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/azure_peering_connection#peer_vnet_name AzurePeeringConnection#peer_vnet_name}
  */
  readonly peerVnetName: string;
  /**
  * The region of the peer VNet in Azure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/azure_peering_connection#peer_vnet_region AzurePeeringConnection#peer_vnet_region}
  */
  readonly peerVnetRegion: string;
  /**
  * The ID of the peering connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/azure_peering_connection#peering_id AzurePeeringConnection#peering_id}
  */
  readonly peeringId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/azure_peering_connection#timeouts AzurePeeringConnection#timeouts}
  */
  readonly timeouts?: AzurePeeringConnectionTimeouts;
}
export interface AzurePeeringConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/azure_peering_connection#create AzurePeeringConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/azure_peering_connection#default AzurePeeringConnection#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/r/azure_peering_connection#delete AzurePeeringConnection#delete}
  */
  readonly delete?: string;
}

export function azurePeeringConnectionTimeoutsToTerraform(struct?: AzurePeeringConnectionTimeoutsOutputReference | AzurePeeringConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class AzurePeeringConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzurePeeringConnectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzurePeeringConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/hcp/r/azure_peering_connection hcp_azure_peering_connection}
*/
export class AzurePeeringConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_azure_peering_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/hcp/r/azure_peering_connection hcp_azure_peering_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzurePeeringConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: AzurePeeringConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_azure_peering_connection',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.52.0',
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
    this._peerResourceGroupName = config.peerResourceGroupName;
    this._peerSubscriptionId = config.peerSubscriptionId;
    this._peerTenantId = config.peerTenantId;
    this._peerVnetName = config.peerVnetName;
    this._peerVnetRegion = config.peerVnetRegion;
    this._peeringId = config.peeringId;
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

  // peer_resource_group_name - computed: false, optional: false, required: true
  private _peerResourceGroupName?: string; 
  public get peerResourceGroupName() {
    return this.getStringAttribute('peer_resource_group_name');
  }
  public set peerResourceGroupName(value: string) {
    this._peerResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerResourceGroupNameInput() {
    return this._peerResourceGroupName;
  }

  // peer_subscription_id - computed: false, optional: false, required: true
  private _peerSubscriptionId?: string; 
  public get peerSubscriptionId() {
    return this.getStringAttribute('peer_subscription_id');
  }
  public set peerSubscriptionId(value: string) {
    this._peerSubscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSubscriptionIdInput() {
    return this._peerSubscriptionId;
  }

  // peer_tenant_id - computed: false, optional: false, required: true
  private _peerTenantId?: string; 
  public get peerTenantId() {
    return this.getStringAttribute('peer_tenant_id');
  }
  public set peerTenantId(value: string) {
    this._peerTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTenantIdInput() {
    return this._peerTenantId;
  }

  // peer_vnet_name - computed: false, optional: false, required: true
  private _peerVnetName?: string; 
  public get peerVnetName() {
    return this.getStringAttribute('peer_vnet_name');
  }
  public set peerVnetName(value: string) {
    this._peerVnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVnetNameInput() {
    return this._peerVnetName;
  }

  // peer_vnet_region - computed: false, optional: false, required: true
  private _peerVnetRegion?: string; 
  public get peerVnetRegion() {
    return this.getStringAttribute('peer_vnet_region');
  }
  public set peerVnetRegion(value: string) {
    this._peerVnetRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVnetRegionInput() {
    return this._peerVnetRegion;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AzurePeeringConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AzurePeeringConnectionTimeouts) {
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
      peer_resource_group_name: cdktf.stringToTerraform(this._peerResourceGroupName),
      peer_subscription_id: cdktf.stringToTerraform(this._peerSubscriptionId),
      peer_tenant_id: cdktf.stringToTerraform(this._peerTenantId),
      peer_vnet_name: cdktf.stringToTerraform(this._peerVnetName),
      peer_vnet_region: cdktf.stringToTerraform(this._peerVnetRegion),
      peering_id: cdktf.stringToTerraform(this._peeringId),
      timeouts: azurePeeringConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
