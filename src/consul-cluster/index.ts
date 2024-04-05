/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsulClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables automatic HVN to HVN peering when creating a secondary cluster in a federation. The alternative to using the auto-accept feature is to create an [`hcp_hvn_peering_connection`](hvn_peering_connection.md) resource that explicitly defines the HVN resources that are allowed to communicate with each other.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#auto_hvn_to_hvn_peering ConsulCluster#auto_hvn_to_hvn_peering}
  */
  readonly autoHvnToHvnPeering?: boolean | cdktf.IResolvable;
  /**
  * The ID of the HCP Consul cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#cluster_id ConsulCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Denotes the Consul connect feature should be enabled for this cluster.  Default to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#connect_enabled ConsulCluster#connect_enabled}
  */
  readonly connectEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Consul data center name of the cluster. If not specified, it is defaulted to the value of `cluster_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#datacenter ConsulCluster#datacenter}
  */
  readonly datacenter?: string;
  /**
  * The ID of the HVN this HCP Consul cluster is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#hvn_id ConsulCluster#hvn_id}
  */
  readonly hvnId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#id ConsulCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The minimum Consul patch version of the cluster. Allows only the rightmost version component to increment (E.g: `1.13.0` will allow installation of `1.13.2` and `1.13.3` etc., but not `1.14.0`). If not specified, it is defaulted to the version that is currently recommended by HCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#min_consul_version ConsulCluster#min_consul_version}
  */
  readonly minConsulVersion?: string;
  /**
  * The `self_link` of the HCP Consul cluster which is the primary in the federation setup with this HCP Consul cluster. If not specified, it is a standalone cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#primary_link ConsulCluster#primary_link}
  */
  readonly primaryLink?: string;
  /**
  * 
  * The ID of the HCP project where the HCP Consul cluster is located.
  * If not specified, the project specified in the HCP Provider config block will be used, if configured.
  * If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#project_id ConsulCluster#project_id}
  */
  readonly projectId?: string;
  /**
  * Denotes that the cluster has a public endpoint for the Consul UI. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#public_endpoint ConsulCluster#public_endpoint}
  */
  readonly publicEndpoint?: boolean | cdktf.IResolvable;
  /**
  * The t-shirt size representation of each server VM that this Consul cluster is provisioned with. Valid option for development tier - `x_small`. Valid options for other tiers - `small`, `medium`, `large`. For more details - https://cloud.hashicorp.com/pricing/consul. Upgrading the size of a cluster after creation is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#size ConsulCluster#size}
  */
  readonly size?: string;
  /**
  * The tier that the HCP Consul cluster will be provisioned as.  Only `development`, `standard`, `plus`, and `premium` are available at this time. See [pricing information](https://www.hashicorp.com/products/consul/pricing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#tier ConsulCluster#tier}
  */
  readonly tier: string;
  /**
  * ip_allowlist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#ip_allowlist ConsulCluster#ip_allowlist}
  */
  readonly ipAllowlist?: ConsulClusterIpAllowlistStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#timeouts ConsulCluster#timeouts}
  */
  readonly timeouts?: ConsulClusterTimeouts;
}
export interface ConsulClusterIpAllowlistStruct {
  /**
  * IP address range in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#address ConsulCluster#address}
  */
  readonly address: string;
  /**
  * Description to help identify source (maximum 255 chars).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#description ConsulCluster#description}
  */
  readonly description?: string;
}

export function consulClusterIpAllowlistStructToTerraform(struct?: ConsulClusterIpAllowlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function consulClusterIpAllowlistStructToHclTerraform(struct?: ConsulClusterIpAllowlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsulClusterIpAllowlistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConsulClusterIpAllowlistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsulClusterIpAllowlistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._description = value.description;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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
}

export class ConsulClusterIpAllowlistStructList extends cdktf.ComplexList {
  public internalValue? : ConsulClusterIpAllowlistStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConsulClusterIpAllowlistStructOutputReference {
    return new ConsulClusterIpAllowlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsulClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#create ConsulCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#default ConsulCluster#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#delete ConsulCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#update ConsulCluster#update}
  */
  readonly update?: string;
}

export function consulClusterTimeoutsToTerraform(struct?: ConsulClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function consulClusterTimeoutsToHclTerraform(struct?: ConsulClusterTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsulClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsulClusterTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsulClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster hcp_consul_cluster}
*/
export class ConsulCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_consul_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsulCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsulCluster to import
  * @param importFromId The id of the existing ConsulCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsulCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_consul_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/resources/consul_cluster hcp_consul_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsulClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ConsulClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_consul_cluster',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.86.0',
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
    this._autoHvnToHvnPeering = config.autoHvnToHvnPeering;
    this._clusterId = config.clusterId;
    this._connectEnabled = config.connectEnabled;
    this._datacenter = config.datacenter;
    this._hvnId = config.hvnId;
    this._id = config.id;
    this._minConsulVersion = config.minConsulVersion;
    this._primaryLink = config.primaryLink;
    this._projectId = config.projectId;
    this._publicEndpoint = config.publicEndpoint;
    this._size = config.size;
    this._tier = config.tier;
    this._ipAllowlist.internalValue = config.ipAllowlist;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_hvn_to_hvn_peering - computed: true, optional: true, required: false
  private _autoHvnToHvnPeering?: boolean | cdktf.IResolvable; 
  public get autoHvnToHvnPeering() {
    return this.getBooleanAttribute('auto_hvn_to_hvn_peering');
  }
  public set autoHvnToHvnPeering(value: boolean | cdktf.IResolvable) {
    this._autoHvnToHvnPeering = value;
  }
  public resetAutoHvnToHvnPeering() {
    this._autoHvnToHvnPeering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHvnToHvnPeeringInput() {
    return this._autoHvnToHvnPeering;
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // connect_enabled - computed: false, optional: true, required: false
  private _connectEnabled?: boolean | cdktf.IResolvable; 
  public get connectEnabled() {
    return this.getBooleanAttribute('connect_enabled');
  }
  public set connectEnabled(value: boolean | cdktf.IResolvable) {
    this._connectEnabled = value;
  }
  public resetConnectEnabled() {
    this._connectEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectEnabledInput() {
    return this._connectEnabled;
  }

  // consul_automatic_upgrades - computed: true, optional: false, required: false
  public get consulAutomaticUpgrades() {
    return this.getBooleanAttribute('consul_automatic_upgrades');
  }

  // consul_ca_file - computed: true, optional: false, required: false
  public get consulCaFile() {
    return this.getStringAttribute('consul_ca_file');
  }

  // consul_config_file - computed: true, optional: false, required: false
  public get consulConfigFile() {
    return this.getStringAttribute('consul_config_file');
  }

  // consul_private_endpoint_url - computed: true, optional: false, required: false
  public get consulPrivateEndpointUrl() {
    return this.getStringAttribute('consul_private_endpoint_url');
  }

  // consul_public_endpoint_url - computed: true, optional: false, required: false
  public get consulPublicEndpointUrl() {
    return this.getStringAttribute('consul_public_endpoint_url');
  }

  // consul_root_token_accessor_id - computed: true, optional: false, required: false
  public get consulRootTokenAccessorId() {
    return this.getStringAttribute('consul_root_token_accessor_id');
  }

  // consul_root_token_secret_id - computed: true, optional: false, required: false
  public get consulRootTokenSecretId() {
    return this.getStringAttribute('consul_root_token_secret_id');
  }

  // consul_snapshot_interval - computed: true, optional: false, required: false
  public get consulSnapshotInterval() {
    return this.getStringAttribute('consul_snapshot_interval');
  }

  // consul_snapshot_retention - computed: true, optional: false, required: false
  public get consulSnapshotRetention() {
    return this.getStringAttribute('consul_snapshot_retention');
  }

  // consul_version - computed: true, optional: false, required: false
  public get consulVersion() {
    return this.getStringAttribute('consul_version');
  }

  // datacenter - computed: true, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
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

  // min_consul_version - computed: false, optional: true, required: false
  private _minConsulVersion?: string; 
  public get minConsulVersion() {
    return this.getStringAttribute('min_consul_version');
  }
  public set minConsulVersion(value: string) {
    this._minConsulVersion = value;
  }
  public resetMinConsulVersion() {
    this._minConsulVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minConsulVersionInput() {
    return this._minConsulVersion;
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // primary_link - computed: false, optional: true, required: false
  private _primaryLink?: string; 
  public get primaryLink() {
    return this.getStringAttribute('primary_link');
  }
  public set primaryLink(value: string) {
    this._primaryLink = value;
  }
  public resetPrimaryLink() {
    this._primaryLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryLinkInput() {
    return this._primaryLink;
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

  // public_endpoint - computed: false, optional: true, required: false
  private _publicEndpoint?: boolean | cdktf.IResolvable; 
  public get publicEndpoint() {
    return this.getBooleanAttribute('public_endpoint');
  }
  public set publicEndpoint(value: boolean | cdktf.IResolvable) {
    this._publicEndpoint = value;
  }
  public resetPublicEndpoint() {
    this._publicEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicEndpointInput() {
    return this._publicEndpoint;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // ip_allowlist - computed: false, optional: true, required: false
  private _ipAllowlist = new ConsulClusterIpAllowlistStructList(this, "ip_allowlist", false);
  public get ipAllowlist() {
    return this._ipAllowlist;
  }
  public putIpAllowlist(value: ConsulClusterIpAllowlistStruct[] | cdktf.IResolvable) {
    this._ipAllowlist.internalValue = value;
  }
  public resetIpAllowlist() {
    this._ipAllowlist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowlistInput() {
    return this._ipAllowlist.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConsulClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConsulClusterTimeouts) {
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
      auto_hvn_to_hvn_peering: cdktf.booleanToTerraform(this._autoHvnToHvnPeering),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      connect_enabled: cdktf.booleanToTerraform(this._connectEnabled),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      hvn_id: cdktf.stringToTerraform(this._hvnId),
      id: cdktf.stringToTerraform(this._id),
      min_consul_version: cdktf.stringToTerraform(this._minConsulVersion),
      primary_link: cdktf.stringToTerraform(this._primaryLink),
      project_id: cdktf.stringToTerraform(this._projectId),
      public_endpoint: cdktf.booleanToTerraform(this._publicEndpoint),
      size: cdktf.stringToTerraform(this._size),
      tier: cdktf.stringToTerraform(this._tier),
      ip_allowlist: cdktf.listMapper(consulClusterIpAllowlistStructToTerraform, true)(this._ipAllowlist.internalValue),
      timeouts: consulClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_hvn_to_hvn_peering: {
        value: cdktf.booleanToHclTerraform(this._autoHvnToHvnPeering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_enabled: {
        value: cdktf.booleanToHclTerraform(this._connectEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      min_consul_version: {
        value: cdktf.stringToHclTerraform(this._minConsulVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_link: {
        value: cdktf.stringToHclTerraform(this._primaryLink),
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
      public_endpoint: {
        value: cdktf.booleanToHclTerraform(this._publicEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_allowlist: {
        value: cdktf.listMapperHcl(consulClusterIpAllowlistStructToHclTerraform, true)(this._ipAllowlist.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConsulClusterIpAllowlistStructList",
      },
      timeouts: {
        value: consulClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsulClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
