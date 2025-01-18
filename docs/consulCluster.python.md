# `consulCluster` Submodule <a name="`consulCluster` Submodule" id="@cdktf/provider-hcp.consulCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulCluster <a name="ConsulCluster" id="@cdktf/provider-hcp.consulCluster.ConsulCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster hcp_consul_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import consul_cluster

consulCluster.ConsulCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  hvn_id: str,
  tier: str,
  auto_hvn_to_hvn_peering: typing.Union[bool, IResolvable] = None,
  connect_enabled: typing.Union[bool, IResolvable] = None,
  datacenter: str = None,
  id: str = None,
  ip_allowlist: typing.Union[IResolvable, typing.List[ConsulClusterIpAllowlistStruct]] = None,
  min_consul_version: str = None,
  primary_link: str = None,
  project_id: str = None,
  public_endpoint: typing.Union[bool, IResolvable] = None,
  size: str = None,
  timeouts: ConsulClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HVN this HCP Consul cluster is associated to. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.tier">tier</a></code> | <code>str</code> | The tier that the HCP Consul cluster will be provisioned as. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.autoHvnToHvnPeering">auto_hvn_to_hvn_peering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables automatic HVN to HVN peering when creating a secondary cluster in a federation. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.connectEnabled">connect_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes the Consul connect feature should be enabled for this cluster.  Default to true. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.datacenter">datacenter</a></code> | <code>str</code> | The Consul data center name of the cluster. If not specified, it is defaulted to the value of `cluster_id`. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#id ConsulCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.ipAllowlist">ip_allowlist</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>]]</code> | ip_allowlist block. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.minConsulVersion">min_consul_version</a></code> | <code>str</code> | The minimum Consul patch version of the cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.primaryLink">primary_link</a></code> | <code>str</code> | The `self_link` of the HCP Consul cluster which is the primary in the federation setup with this HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the HCP Consul cluster is located. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.publicEndpoint">public_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes that the cluster has a public endpoint for the Consul UI. Defaults to false. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.size">size</a></code> | <code>str</code> | The t-shirt size representation of each server VM that this Consul cluster is provisioned with. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.clusterId"></a>

- *Type:* str

The ID of the HCP Consul cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#cluster_id ConsulCluster#cluster_id}

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.hvnId"></a>

- *Type:* str

The ID of the HVN this HCP Consul cluster is associated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#hvn_id ConsulCluster#hvn_id}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.tier"></a>

- *Type:* str

The tier that the HCP Consul cluster will be provisioned as.

Only `development`, `standard`, `plus`, and `premium` are available at this time. See [pricing information](https://www.hashicorp.com/products/consul/pricing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#tier ConsulCluster#tier}

---

##### `auto_hvn_to_hvn_peering`<sup>Optional</sup> <a name="auto_hvn_to_hvn_peering" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.autoHvnToHvnPeering"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables automatic HVN to HVN peering when creating a secondary cluster in a federation.

The alternative to using the auto-accept feature is to create an [`hcp_hvn_peering_connection`](hvn_peering_connection.md) resource that explicitly defines the HVN resources that are allowed to communicate with each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#auto_hvn_to_hvn_peering ConsulCluster#auto_hvn_to_hvn_peering}

---

##### `connect_enabled`<sup>Optional</sup> <a name="connect_enabled" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.connectEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes the Consul connect feature should be enabled for this cluster.  Default to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#connect_enabled ConsulCluster#connect_enabled}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.datacenter"></a>

- *Type:* str

The Consul data center name of the cluster. If not specified, it is defaulted to the value of `cluster_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#datacenter ConsulCluster#datacenter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#id ConsulCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_allowlist`<sup>Optional</sup> <a name="ip_allowlist" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.ipAllowlist"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>]]

ip_allowlist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#ip_allowlist ConsulCluster#ip_allowlist}

---

##### `min_consul_version`<sup>Optional</sup> <a name="min_consul_version" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.minConsulVersion"></a>

- *Type:* str

The minimum Consul patch version of the cluster.

Allows only the rightmost version component to increment (E.g: `1.13.0` will allow installation of `1.13.2` and `1.13.3` etc., but not `1.14.0`). If not specified, it is defaulted to the version that is currently recommended by HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#min_consul_version ConsulCluster#min_consul_version}

---

##### `primary_link`<sup>Optional</sup> <a name="primary_link" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.primaryLink"></a>

- *Type:* str

The `self_link` of the HCP Consul cluster which is the primary in the federation setup with this HCP Consul cluster.

If not specified, it is a standalone cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#primary_link ConsulCluster#primary_link}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the HCP Consul cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#project_id ConsulCluster#project_id}

---

##### `public_endpoint`<sup>Optional</sup> <a name="public_endpoint" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.publicEndpoint"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes that the cluster has a public endpoint for the Consul UI. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#public_endpoint ConsulCluster#public_endpoint}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.size"></a>

- *Type:* str

The t-shirt size representation of each server VM that this Consul cluster is provisioned with.

Valid option for development tier - `x_small`. Valid options for other tiers - `small`, `medium`, `large`. For more details - https://cloud.hashicorp.com/pricing/consul. Upgrading the size of a cluster after creation is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#size ConsulCluster#size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#timeouts ConsulCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.putIpAllowlist">put_ip_allowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetAutoHvnToHvnPeering">reset_auto_hvn_to_hvn_peering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetConnectEnabled">reset_connect_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetDatacenter">reset_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetIpAllowlist">reset_ip_allowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetMinConsulVersion">reset_min_consul_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPrimaryLink">reset_primary_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPublicEndpoint">reset_public_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ip_allowlist` <a name="put_ip_allowlist" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putIpAllowlist"></a>

```python
def put_ip_allowlist(
  value: typing.Union[IResolvable, typing.List[ConsulClusterIpAllowlistStruct]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putIpAllowlist.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#create ConsulCluster#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#default ConsulCluster#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#delete ConsulCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#update ConsulCluster#update}.

---

##### `reset_auto_hvn_to_hvn_peering` <a name="reset_auto_hvn_to_hvn_peering" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetAutoHvnToHvnPeering"></a>

```python
def reset_auto_hvn_to_hvn_peering() -> None
```

##### `reset_connect_enabled` <a name="reset_connect_enabled" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetConnectEnabled"></a>

```python
def reset_connect_enabled() -> None
```

##### `reset_datacenter` <a name="reset_datacenter" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetDatacenter"></a>

```python
def reset_datacenter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_allowlist` <a name="reset_ip_allowlist" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetIpAllowlist"></a>

```python
def reset_ip_allowlist() -> None
```

##### `reset_min_consul_version` <a name="reset_min_consul_version" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetMinConsulVersion"></a>

```python
def reset_min_consul_version() -> None
```

##### `reset_primary_link` <a name="reset_primary_link" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPrimaryLink"></a>

```python
def reset_primary_link() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_public_endpoint` <a name="reset_public_endpoint" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetPublicEndpoint"></a>

```python
def reset_public_endpoint() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ConsulCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import consul_cluster

consulCluster.ConsulCluster.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import consul_cluster

consulCluster.ConsulCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import consul_cluster

consulCluster.ConsulCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import consul_cluster

consulCluster.ConsulCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ConsulCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConsulCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConsulCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConsulCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulAutomaticUpgrades">consul_automatic_upgrades</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulCaFile">consul_ca_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulConfigFile">consul_config_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPrivateEndpointUrl">consul_private_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPublicEndpointUrl">consul_public_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenAccessorId">consul_root_token_accessor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenSecretId">consul_root_token_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotInterval">consul_snapshot_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotRetention">consul_snapshot_retention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulVersion">consul_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlist">ip_allowlist</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList">ConsulClusterIpAllowlistStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.scale">scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference">ConsulClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeeringInput">auto_hvn_to_hvn_peering_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabledInput">connect_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnIdInput">hvn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlistInput">ip_allowlist_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersionInput">min_consul_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLinkInput">primary_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpointInput">public_endpoint_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.sizeInput">size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeering">auto_hvn_to_hvn_peering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabled">connect_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnId">hvn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersion">min_consul_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLink">primary_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpoint">public_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tier">tier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

---

##### `consul_automatic_upgrades`<sup>Required</sup> <a name="consul_automatic_upgrades" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulAutomaticUpgrades"></a>

```python
consul_automatic_upgrades: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `consul_ca_file`<sup>Required</sup> <a name="consul_ca_file" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulCaFile"></a>

```python
consul_ca_file: str
```

- *Type:* str

---

##### `consul_config_file`<sup>Required</sup> <a name="consul_config_file" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulConfigFile"></a>

```python
consul_config_file: str
```

- *Type:* str

---

##### `consul_private_endpoint_url`<sup>Required</sup> <a name="consul_private_endpoint_url" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPrivateEndpointUrl"></a>

```python
consul_private_endpoint_url: str
```

- *Type:* str

---

##### `consul_public_endpoint_url`<sup>Required</sup> <a name="consul_public_endpoint_url" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulPublicEndpointUrl"></a>

```python
consul_public_endpoint_url: str
```

- *Type:* str

---

##### `consul_root_token_accessor_id`<sup>Required</sup> <a name="consul_root_token_accessor_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenAccessorId"></a>

```python
consul_root_token_accessor_id: str
```

- *Type:* str

---

##### `consul_root_token_secret_id`<sup>Required</sup> <a name="consul_root_token_secret_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulRootTokenSecretId"></a>

```python
consul_root_token_secret_id: str
```

- *Type:* str

---

##### `consul_snapshot_interval`<sup>Required</sup> <a name="consul_snapshot_interval" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotInterval"></a>

```python
consul_snapshot_interval: str
```

- *Type:* str

---

##### `consul_snapshot_retention`<sup>Required</sup> <a name="consul_snapshot_retention" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulSnapshotRetention"></a>

```python
consul_snapshot_retention: str
```

- *Type:* str

---

##### `consul_version`<sup>Required</sup> <a name="consul_version" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.consulVersion"></a>

```python
consul_version: str
```

- *Type:* str

---

##### `ip_allowlist`<sup>Required</sup> <a name="ip_allowlist" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlist"></a>

```python
ip_allowlist: ConsulClusterIpAllowlistStructList
```

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList">ConsulClusterIpAllowlistStructList</a>

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.scale"></a>

```python
scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeouts"></a>

```python
timeouts: ConsulClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference">ConsulClusterTimeoutsOutputReference</a>

---

##### `auto_hvn_to_hvn_peering_input`<sup>Optional</sup> <a name="auto_hvn_to_hvn_peering_input" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeeringInput"></a>

```python
auto_hvn_to_hvn_peering_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `connect_enabled_input`<sup>Optional</sup> <a name="connect_enabled_input" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabledInput"></a>

```python
connect_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `hvn_id_input`<sup>Optional</sup> <a name="hvn_id_input" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnIdInput"></a>

```python
hvn_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_allowlist_input`<sup>Optional</sup> <a name="ip_allowlist_input" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.ipAllowlistInput"></a>

```python
ip_allowlist_input: typing.Union[IResolvable, typing.List[ConsulClusterIpAllowlistStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>]]

---

##### `min_consul_version_input`<sup>Optional</sup> <a name="min_consul_version_input" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersionInput"></a>

```python
min_consul_version_input: str
```

- *Type:* str

---

##### `primary_link_input`<sup>Optional</sup> <a name="primary_link_input" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLinkInput"></a>

```python
primary_link_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `public_endpoint_input`<sup>Optional</sup> <a name="public_endpoint_input" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpointInput"></a>

```python
public_endpoint_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.sizeInput"></a>

```python
size_input: str
```

- *Type:* str

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ConsulClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>]

---

##### `auto_hvn_to_hvn_peering`<sup>Required</sup> <a name="auto_hvn_to_hvn_peering" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.autoHvnToHvnPeering"></a>

```python
auto_hvn_to_hvn_peering: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `connect_enabled`<sup>Required</sup> <a name="connect_enabled" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.connectEnabled"></a>

```python
connect_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `min_consul_version`<sup>Required</sup> <a name="min_consul_version" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.minConsulVersion"></a>

```python
min_consul_version: str
```

- *Type:* str

---

##### `primary_link`<sup>Required</sup> <a name="primary_link" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.primaryLink"></a>

```python
primary_link: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `public_endpoint`<sup>Required</sup> <a name="public_endpoint" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.publicEndpoint"></a>

```python
public_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.consulCluster.ConsulCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulClusterConfig <a name="ConsulClusterConfig" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import consul_cluster

consulCluster.ConsulClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  hvn_id: str,
  tier: str,
  auto_hvn_to_hvn_peering: typing.Union[bool, IResolvable] = None,
  connect_enabled: typing.Union[bool, IResolvable] = None,
  datacenter: str = None,
  id: str = None,
  ip_allowlist: typing.Union[IResolvable, typing.List[ConsulClusterIpAllowlistStruct]] = None,
  min_consul_version: str = None,
  primary_link: str = None,
  project_id: str = None,
  public_endpoint: typing.Union[bool, IResolvable] = None,
  size: str = None,
  timeouts: ConsulClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HVN this HCP Consul cluster is associated to. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.tier">tier</a></code> | <code>str</code> | The tier that the HCP Consul cluster will be provisioned as. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.autoHvnToHvnPeering">auto_hvn_to_hvn_peering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables automatic HVN to HVN peering when creating a secondary cluster in a federation. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connectEnabled">connect_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes the Consul connect feature should be enabled for this cluster.  Default to true. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.datacenter">datacenter</a></code> | <code>str</code> | The Consul data center name of the cluster. If not specified, it is defaulted to the value of `cluster_id`. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#id ConsulCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.ipAllowlist">ip_allowlist</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>]]</code> | ip_allowlist block. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.minConsulVersion">min_consul_version</a></code> | <code>str</code> | The minimum Consul patch version of the cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.primaryLink">primary_link</a></code> | <code>str</code> | The `self_link` of the HCP Consul cluster which is the primary in the federation setup with this HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the HCP Consul cluster is located. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.publicEndpoint">public_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes that the cluster has a public endpoint for the Consul UI. Defaults to false. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.size">size</a></code> | <code>str</code> | The t-shirt size representation of each server VM that this Consul cluster is provisioned with. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The ID of the HCP Consul cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#cluster_id ConsulCluster#cluster_id}

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

The ID of the HVN this HCP Consul cluster is associated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#hvn_id ConsulCluster#hvn_id}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

The tier that the HCP Consul cluster will be provisioned as.

Only `development`, `standard`, `plus`, and `premium` are available at this time. See [pricing information](https://www.hashicorp.com/products/consul/pricing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#tier ConsulCluster#tier}

---

##### `auto_hvn_to_hvn_peering`<sup>Optional</sup> <a name="auto_hvn_to_hvn_peering" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.autoHvnToHvnPeering"></a>

```python
auto_hvn_to_hvn_peering: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables automatic HVN to HVN peering when creating a secondary cluster in a federation.

The alternative to using the auto-accept feature is to create an [`hcp_hvn_peering_connection`](hvn_peering_connection.md) resource that explicitly defines the HVN resources that are allowed to communicate with each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#auto_hvn_to_hvn_peering ConsulCluster#auto_hvn_to_hvn_peering}

---

##### `connect_enabled`<sup>Optional</sup> <a name="connect_enabled" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.connectEnabled"></a>

```python
connect_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes the Consul connect feature should be enabled for this cluster.  Default to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#connect_enabled ConsulCluster#connect_enabled}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

The Consul data center name of the cluster. If not specified, it is defaulted to the value of `cluster_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#datacenter ConsulCluster#datacenter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#id ConsulCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_allowlist`<sup>Optional</sup> <a name="ip_allowlist" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.ipAllowlist"></a>

```python
ip_allowlist: typing.Union[IResolvable, typing.List[ConsulClusterIpAllowlistStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>]]

ip_allowlist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#ip_allowlist ConsulCluster#ip_allowlist}

---

##### `min_consul_version`<sup>Optional</sup> <a name="min_consul_version" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.minConsulVersion"></a>

```python
min_consul_version: str
```

- *Type:* str

The minimum Consul patch version of the cluster.

Allows only the rightmost version component to increment (E.g: `1.13.0` will allow installation of `1.13.2` and `1.13.3` etc., but not `1.14.0`). If not specified, it is defaulted to the version that is currently recommended by HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#min_consul_version ConsulCluster#min_consul_version}

---

##### `primary_link`<sup>Optional</sup> <a name="primary_link" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.primaryLink"></a>

```python
primary_link: str
```

- *Type:* str

The `self_link` of the HCP Consul cluster which is the primary in the federation setup with this HCP Consul cluster.

If not specified, it is a standalone cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#primary_link ConsulCluster#primary_link}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the HCP Consul cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#project_id ConsulCluster#project_id}

---

##### `public_endpoint`<sup>Optional</sup> <a name="public_endpoint" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.publicEndpoint"></a>

```python
public_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes that the cluster has a public endpoint for the Consul UI. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#public_endpoint ConsulCluster#public_endpoint}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.size"></a>

```python
size: str
```

- *Type:* str

The t-shirt size representation of each server VM that this Consul cluster is provisioned with.

Valid option for development tier - `x_small`. Valid options for other tiers - `small`, `medium`, `large`. For more details - https://cloud.hashicorp.com/pricing/consul. Upgrading the size of a cluster after creation is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#size ConsulCluster#size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.consulCluster.ConsulClusterConfig.property.timeouts"></a>

```python
timeouts: ConsulClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#timeouts ConsulCluster#timeouts}

---

### ConsulClusterIpAllowlistStruct <a name="ConsulClusterIpAllowlistStruct" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import consul_cluster

consulCluster.ConsulClusterIpAllowlistStruct(
  address: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.address">address</a></code> | <code>str</code> | IP address range in CIDR notation. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.description">description</a></code> | <code>str</code> | Description to help identify source (maximum 255 chars). |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.address"></a>

```python
address: str
```

- *Type:* str

IP address range in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#address ConsulCluster#address}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct.property.description"></a>

```python
description: str
```

- *Type:* str

Description to help identify source (maximum 255 chars).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#description ConsulCluster#description}

---

### ConsulClusterTimeouts <a name="ConsulClusterTimeouts" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import consul_cluster

consulCluster.ConsulClusterTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#create ConsulCluster#create}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#default ConsulCluster#default}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#delete ConsulCluster#delete}. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#update ConsulCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#create ConsulCluster#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#default ConsulCluster#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#delete ConsulCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/consul_cluster#update ConsulCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConsulClusterIpAllowlistStructList <a name="ConsulClusterIpAllowlistStructList" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import consul_cluster

consulCluster.ConsulClusterIpAllowlistStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConsulClusterIpAllowlistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConsulClusterIpAllowlistStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>]]

---


### ConsulClusterIpAllowlistStructOutputReference <a name="ConsulClusterIpAllowlistStructOutputReference" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import consul_cluster

consulCluster.ConsulClusterIpAllowlistStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStructOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConsulClusterIpAllowlistStruct]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterIpAllowlistStruct">ConsulClusterIpAllowlistStruct</a>]

---


### ConsulClusterTimeoutsOutputReference <a name="ConsulClusterTimeoutsOutputReference" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import consul_cluster

consulCluster.ConsulClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.consulCluster.ConsulClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConsulClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.consulCluster.ConsulClusterTimeouts">ConsulClusterTimeouts</a>]

---



