// https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HvnRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The destination CIDR of the HVN route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route#destination_cidr HvnRoute#destination_cidr}
  */
  readonly destinationCidr: string;
  /**
  * The `self_link` of the HashiCorp Virtual Network (HVN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route#hvn_link HvnRoute#hvn_link}
  */
  readonly hvnLink: string;
  /**
  * The ID of the HVN route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route#hvn_route_id HvnRoute#hvn_route_id}
  */
  readonly hvnRouteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route#id HvnRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the HCP project where the HVN route is located. Always matches the project ID in `hvn_link`. Setting this attribute is deprecated, but it will remain usable in read-only form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route#project_id HvnRoute#project_id}
  */
  readonly projectId?: string;
  /**
  * A unique URL identifying the target of the HVN route. Examples of the target: [`aws_network_peering`](aws_network_peering.md), [`aws_transit_gateway_attachment`](aws_transit_gateway_attachment.md)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route#target_link HvnRoute#target_link}
  */
  readonly targetLink: string;
  /**
  * azure_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route#azure_config HvnRoute#azure_config}
  */
  readonly azureConfig?: HvnRouteAzureConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route#timeouts HvnRoute#timeouts}
  */
  readonly timeouts?: HvnRouteTimeouts;
}
export interface HvnRouteAzureConfig {
  /**
  * Contains the IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VIRTUAL_APPLIANCE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route#next_hop_ip_address HvnRoute#next_hop_ip_address}
  */
  readonly nextHopIpAddress?: string;
  /**
  * The type of Azure hop the packet should be sent to. Valid options for Next Hop Type - `VIRTUAL_APPLIANCE` or `VIRTUAL_NETWORK_GATEWAY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route#next_hop_type HvnRoute#next_hop_type}
  */
  readonly nextHopType: string;
}

export function hvnRouteAzureConfigToTerraform(struct?: HvnRouteAzureConfigOutputReference | HvnRouteAzureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_hop_ip_address: cdktf.stringToTerraform(struct!.nextHopIpAddress),
    next_hop_type: cdktf.stringToTerraform(struct!.nextHopType),
  }
}


export function hvnRouteAzureConfigToHclTerraform(struct?: HvnRouteAzureConfigOutputReference | HvnRouteAzureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_hop_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.nextHopIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_type: {
      value: cdktf.stringToHclTerraform(struct!.nextHopType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HvnRouteAzureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HvnRouteAzureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextHopIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopIpAddress = this._nextHopIpAddress;
    }
    if (this._nextHopType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopType = this._nextHopType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HvnRouteAzureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nextHopIpAddress = undefined;
      this._nextHopType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nextHopIpAddress = value.nextHopIpAddress;
      this._nextHopType = value.nextHopType;
    }
  }

  // next_hop_ip_address - computed: true, optional: true, required: false
  private _nextHopIpAddress?: string; 
  public get nextHopIpAddress() {
    return this.getStringAttribute('next_hop_ip_address');
  }
  public set nextHopIpAddress(value: string) {
    this._nextHopIpAddress = value;
  }
  public resetNextHopIpAddress() {
    this._nextHopIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopIpAddressInput() {
    return this._nextHopIpAddress;
  }

  // next_hop_type - computed: false, optional: false, required: true
  private _nextHopType?: string; 
  public get nextHopType() {
    return this.getStringAttribute('next_hop_type');
  }
  public set nextHopType(value: string) {
    this._nextHopType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopTypeInput() {
    return this._nextHopType;
  }
}
export interface HvnRouteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route#create HvnRoute#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route#default HvnRoute#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route#delete HvnRoute#delete}
  */
  readonly delete?: string;
}

export function hvnRouteTimeoutsToTerraform(struct?: HvnRouteTimeouts | cdktf.IResolvable): any {
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


export function hvnRouteTimeoutsToHclTerraform(struct?: HvnRouteTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HvnRouteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HvnRouteTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HvnRouteTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route hcp_hvn_route}
*/
export class HvnRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_hvn_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HvnRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HvnRoute to import
  * @param importFromId The id of the existing HvnRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HvnRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_hvn_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/hvn_route hcp_hvn_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HvnRouteConfig
  */
  public constructor(scope: Construct, id: string, config: HvnRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_hvn_route',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.90.0',
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
    this._destinationCidr = config.destinationCidr;
    this._hvnLink = config.hvnLink;
    this._hvnRouteId = config.hvnRouteId;
    this._id = config.id;
    this._projectId = config.projectId;
    this._targetLink = config.targetLink;
    this._azureConfig.internalValue = config.azureConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // destination_cidr - computed: false, optional: false, required: true
  private _destinationCidr?: string; 
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }
  public set destinationCidr(value: string) {
    this._destinationCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrInput() {
    return this._destinationCidr;
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

  // hvn_route_id - computed: false, optional: false, required: true
  private _hvnRouteId?: string; 
  public get hvnRouteId() {
    return this.getStringAttribute('hvn_route_id');
  }
  public set hvnRouteId(value: string) {
    this._hvnRouteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hvnRouteIdInput() {
    return this._hvnRouteId;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_link - computed: false, optional: false, required: true
  private _targetLink?: string; 
  public get targetLink() {
    return this.getStringAttribute('target_link');
  }
  public set targetLink(value: string) {
    this._targetLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLinkInput() {
    return this._targetLink;
  }

  // azure_config - computed: false, optional: true, required: false
  private _azureConfig = new HvnRouteAzureConfigOutputReference(this, "azure_config");
  public get azureConfig() {
    return this._azureConfig;
  }
  public putAzureConfig(value: HvnRouteAzureConfig) {
    this._azureConfig.internalValue = value;
  }
  public resetAzureConfig() {
    this._azureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureConfigInput() {
    return this._azureConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HvnRouteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HvnRouteTimeouts) {
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
      destination_cidr: cdktf.stringToTerraform(this._destinationCidr),
      hvn_link: cdktf.stringToTerraform(this._hvnLink),
      hvn_route_id: cdktf.stringToTerraform(this._hvnRouteId),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      target_link: cdktf.stringToTerraform(this._targetLink),
      azure_config: hvnRouteAzureConfigToTerraform(this._azureConfig.internalValue),
      timeouts: hvnRouteTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_cidr: {
        value: cdktf.stringToHclTerraform(this._destinationCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hvn_link: {
        value: cdktf.stringToHclTerraform(this._hvnLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hvn_route_id: {
        value: cdktf.stringToHclTerraform(this._hvnRouteId),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_link: {
        value: cdktf.stringToHclTerraform(this._targetLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_config: {
        value: hvnRouteAzureConfigToHclTerraform(this._azureConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HvnRouteAzureConfigList",
      },
      timeouts: {
        value: hvnRouteTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HvnRouteTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
