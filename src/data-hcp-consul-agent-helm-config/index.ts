/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/consul_agent_helm_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpConsulAgentHelmConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the HCP Consul cluster.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/consul_agent_helm_config#cluster_id DataHcpConsulAgentHelmConfig#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Denotes that the gossip ports should be exposed.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/consul_agent_helm_config#expose_gossip_ports DataHcpConsulAgentHelmConfig#expose_gossip_ports}
  */
  readonly exposeGossipPorts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/consul_agent_helm_config#id DataHcpConsulAgentHelmConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The FQDN for the Kubernetes API.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/consul_agent_helm_config#kubernetes_endpoint DataHcpConsulAgentHelmConfig#kubernetes_endpoint}
  */
  readonly kubernetesEndpoint: string;
  /**
  * The ID of the HCP project where the HCP Consul cluster is located.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/consul_agent_helm_config#project_id DataHcpConsulAgentHelmConfig#project_id}
  */
  readonly projectId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/consul_agent_helm_config#timeouts DataHcpConsulAgentHelmConfig#timeouts}
  */
  readonly timeouts?: DataHcpConsulAgentHelmConfigTimeouts;
}
export interface DataHcpConsulAgentHelmConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/consul_agent_helm_config#default DataHcpConsulAgentHelmConfig#default}
  */
  readonly default?: string;
}

export function dataHcpConsulAgentHelmConfigTimeoutsToTerraform(struct?: DataHcpConsulAgentHelmConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class DataHcpConsulAgentHelmConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHcpConsulAgentHelmConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataHcpConsulAgentHelmConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/consul_agent_helm_config hcp_consul_agent_helm_config}
*/
export class DataHcpConsulAgentHelmConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_consul_agent_helm_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.58.0/docs/data-sources/consul_agent_helm_config hcp_consul_agent_helm_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpConsulAgentHelmConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpConsulAgentHelmConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_consul_agent_helm_config',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.58.0',
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
    this._exposeGossipPorts = config.exposeGossipPorts;
    this._id = config.id;
    this._kubernetesEndpoint = config.kubernetesEndpoint;
    this._projectId = config.projectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // expose_gossip_ports - computed: false, optional: true, required: false
  private _exposeGossipPorts?: boolean | cdktf.IResolvable; 
  public get exposeGossipPorts() {
    return this.getBooleanAttribute('expose_gossip_ports');
  }
  public set exposeGossipPorts(value: boolean | cdktf.IResolvable) {
    this._exposeGossipPorts = value;
  }
  public resetExposeGossipPorts() {
    this._exposeGossipPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeGossipPortsInput() {
    return this._exposeGossipPorts;
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

  // kubernetes_endpoint - computed: false, optional: false, required: true
  private _kubernetesEndpoint?: string; 
  public get kubernetesEndpoint() {
    return this.getStringAttribute('kubernetes_endpoint');
  }
  public set kubernetesEndpoint(value: string) {
    this._kubernetesEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesEndpointInput() {
    return this._kubernetesEndpoint;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataHcpConsulAgentHelmConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataHcpConsulAgentHelmConfigTimeouts) {
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
      expose_gossip_ports: cdktf.booleanToTerraform(this._exposeGossipPorts),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_endpoint: cdktf.stringToTerraform(this._kubernetesEndpoint),
      project_id: cdktf.stringToTerraform(this._projectId),
      timeouts: dataHcpConsulAgentHelmConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
