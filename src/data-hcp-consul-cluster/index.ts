// https://www.terraform.io/docs/providers/hcp/d/consul_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpConsulClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the HCP Consul cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/d/consul_cluster#cluster_id DataHcpConsulCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/d/consul_cluster#id DataHcpConsulCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/d/consul_cluster#timeouts DataHcpConsulCluster#timeouts}
  */
  readonly timeouts?: DataHcpConsulClusterTimeouts;
}
export interface DataHcpConsulClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcp/d/consul_cluster#default DataHcpConsulCluster#default}
  */
  readonly default?: string;
}

export function dataHcpConsulClusterTimeoutsToTerraform(struct?: DataHcpConsulClusterTimeoutsOutputReference | DataHcpConsulClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class DataHcpConsulClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHcpConsulClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataHcpConsulClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/hcp/d/consul_cluster hcp_consul_cluster}
*/
export class DataHcpConsulCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_consul_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/hcp/d/consul_cluster hcp_consul_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpConsulClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpConsulClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_consul_cluster',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.53.0',
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
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_hvn_to_hvn_peering - computed: true, optional: false, required: false
  public get autoHvnToHvnPeering() {
    return this.getBooleanAttribute('auto_hvn_to_hvn_peering');
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

  // connect_enabled - computed: true, optional: false, required: false
  public get connectEnabled() {
    return this.getBooleanAttribute('connect_enabled');
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

  // datacenter - computed: true, optional: false, required: false
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }

  // hvn_id - computed: true, optional: false, required: false
  public get hvnId() {
    return this.getStringAttribute('hvn_id');
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

  // primary_link - computed: true, optional: false, required: false
  public get primaryLink() {
    return this.getStringAttribute('primary_link');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getBooleanAttribute('public_endpoint');
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

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataHcpConsulClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataHcpConsulClusterTimeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      timeouts: dataHcpConsulClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
