# `azurePeeringConnection` Submodule <a name="`azurePeeringConnection` Submodule" id="@cdktf/provider-hcp.azurePeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzurePeeringConnection <a name="AzurePeeringConnection" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection hcp_azure_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import azure_peering_connection

azurePeeringConnection.AzurePeeringConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hvn_link: str,
  peering_id: str,
  peer_resource_group_name: str,
  peer_subscription_id: str,
  peer_tenant_id: str,
  peer_vnet_name: str,
  peer_vnet_region: str,
  allow_forwarded_traffic: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: AzurePeeringConnectionTimeouts = None,
  use_remote_gateways: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.hvnLink">hvn_link</a></code> | <code>str</code> | The `self_link` of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peeringId">peering_id</a></code> | <code>str</code> | The ID of the peering connection. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerResourceGroupName">peer_resource_group_name</a></code> | <code>str</code> | The resource group name of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerSubscriptionId">peer_subscription_id</a></code> | <code>str</code> | The subscription ID of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerTenantId">peer_tenant_id</a></code> | <code>str</code> | The tenant ID of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerVnetName">peer_vnet_name</a></code> | <code>str</code> | The name of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerVnetRegion">peer_vnet_region</a></code> | <code>str</code> | The region of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.allowForwardedTraffic">allow_forwarded_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the forwarded traffic originating from the peered VNet is allowed in the HVN. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#id AzurePeeringConnection#id}. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.useRemoteGateways">use_remote_gateways</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the HVN should use the gateway of the peered VNet. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hvn_link`<sup>Required</sup> <a name="hvn_link" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.hvnLink"></a>

- *Type:* str

The `self_link` of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#hvn_link AzurePeeringConnection#hvn_link}

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peeringId"></a>

- *Type:* str

The ID of the peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#peering_id AzurePeeringConnection#peering_id}

---

##### `peer_resource_group_name`<sup>Required</sup> <a name="peer_resource_group_name" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerResourceGroupName"></a>

- *Type:* str

The resource group name of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#peer_resource_group_name AzurePeeringConnection#peer_resource_group_name}

---

##### `peer_subscription_id`<sup>Required</sup> <a name="peer_subscription_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerSubscriptionId"></a>

- *Type:* str

The subscription ID of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#peer_subscription_id AzurePeeringConnection#peer_subscription_id}

---

##### `peer_tenant_id`<sup>Required</sup> <a name="peer_tenant_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerTenantId"></a>

- *Type:* str

The tenant ID of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#peer_tenant_id AzurePeeringConnection#peer_tenant_id}

---

##### `peer_vnet_name`<sup>Required</sup> <a name="peer_vnet_name" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerVnetName"></a>

- *Type:* str

The name of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#peer_vnet_name AzurePeeringConnection#peer_vnet_name}

---

##### `peer_vnet_region`<sup>Required</sup> <a name="peer_vnet_region" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.peerVnetRegion"></a>

- *Type:* str

The region of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#peer_vnet_region AzurePeeringConnection#peer_vnet_region}

---

##### `allow_forwarded_traffic`<sup>Optional</sup> <a name="allow_forwarded_traffic" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.allowForwardedTraffic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the forwarded traffic originating from the peered VNet is allowed in the HVN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#allow_forwarded_traffic AzurePeeringConnection#allow_forwarded_traffic}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#id AzurePeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#timeouts AzurePeeringConnection#timeouts}

---

##### `use_remote_gateways`<sup>Optional</sup> <a name="use_remote_gateways" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.Initializer.parameter.useRemoteGateways"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the HVN should use the gateway of the peered VNet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#use_remote_gateways AzurePeeringConnection#use_remote_gateways}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetAllowForwardedTraffic">reset_allow_forwarded_traffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetUseRemoteGateways">reset_use_remote_gateways</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#create AzurePeeringConnection#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#default AzurePeeringConnection#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#delete AzurePeeringConnection#delete}.

---

##### `reset_allow_forwarded_traffic` <a name="reset_allow_forwarded_traffic" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetAllowForwardedTraffic"></a>

```python
def reset_allow_forwarded_traffic() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_use_remote_gateways` <a name="reset_use_remote_gateways" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.resetUseRemoteGateways"></a>

```python
def reset_use_remote_gateways() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AzurePeeringConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import azure_peering_connection

azurePeeringConnection.AzurePeeringConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import azure_peering_connection

azurePeeringConnection.AzurePeeringConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import azure_peering_connection

azurePeeringConnection.AzurePeeringConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import azure_peering_connection

azurePeeringConnection.AzurePeeringConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AzurePeeringConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AzurePeeringConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AzurePeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AzurePeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.azurePeeringId">azure_peering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference">AzurePeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.allowForwardedTrafficInput">allow_forwarded_traffic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.hvnLinkInput">hvn_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peeringIdInput">peering_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerResourceGroupNameInput">peer_resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerSubscriptionIdInput">peer_subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerTenantIdInput">peer_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetNameInput">peer_vnet_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetRegionInput">peer_vnet_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.useRemoteGatewaysInput">use_remote_gateways_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.allowForwardedTraffic">allow_forwarded_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.hvnLink">hvn_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peeringId">peering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerResourceGroupName">peer_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerSubscriptionId">peer_subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerTenantId">peer_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetName">peer_vnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetRegion">peer_vnet_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.useRemoteGateways">use_remote_gateways</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `azure_peering_id`<sup>Required</sup> <a name="azure_peering_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.azurePeeringId"></a>

```python
azure_peering_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.timeouts"></a>

```python
timeouts: AzurePeeringConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference">AzurePeeringConnectionTimeoutsOutputReference</a>

---

##### `allow_forwarded_traffic_input`<sup>Optional</sup> <a name="allow_forwarded_traffic_input" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.allowForwardedTrafficInput"></a>

```python
allow_forwarded_traffic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hvn_link_input`<sup>Optional</sup> <a name="hvn_link_input" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.hvnLinkInput"></a>

```python
hvn_link_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `peering_id_input`<sup>Optional</sup> <a name="peering_id_input" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peeringIdInput"></a>

```python
peering_id_input: str
```

- *Type:* str

---

##### `peer_resource_group_name_input`<sup>Optional</sup> <a name="peer_resource_group_name_input" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerResourceGroupNameInput"></a>

```python
peer_resource_group_name_input: str
```

- *Type:* str

---

##### `peer_subscription_id_input`<sup>Optional</sup> <a name="peer_subscription_id_input" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerSubscriptionIdInput"></a>

```python
peer_subscription_id_input: str
```

- *Type:* str

---

##### `peer_tenant_id_input`<sup>Optional</sup> <a name="peer_tenant_id_input" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerTenantIdInput"></a>

```python
peer_tenant_id_input: str
```

- *Type:* str

---

##### `peer_vnet_name_input`<sup>Optional</sup> <a name="peer_vnet_name_input" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetNameInput"></a>

```python
peer_vnet_name_input: str
```

- *Type:* str

---

##### `peer_vnet_region_input`<sup>Optional</sup> <a name="peer_vnet_region_input" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetRegionInput"></a>

```python
peer_vnet_region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AzurePeeringConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a>]

---

##### `use_remote_gateways_input`<sup>Optional</sup> <a name="use_remote_gateways_input" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.useRemoteGatewaysInput"></a>

```python
use_remote_gateways_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_forwarded_traffic`<sup>Required</sup> <a name="allow_forwarded_traffic" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.allowForwardedTraffic"></a>

```python
allow_forwarded_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hvn_link`<sup>Required</sup> <a name="hvn_link" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.hvnLink"></a>

```python
hvn_link: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peeringId"></a>

```python
peering_id: str
```

- *Type:* str

---

##### `peer_resource_group_name`<sup>Required</sup> <a name="peer_resource_group_name" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerResourceGroupName"></a>

```python
peer_resource_group_name: str
```

- *Type:* str

---

##### `peer_subscription_id`<sup>Required</sup> <a name="peer_subscription_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerSubscriptionId"></a>

```python
peer_subscription_id: str
```

- *Type:* str

---

##### `peer_tenant_id`<sup>Required</sup> <a name="peer_tenant_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerTenantId"></a>

```python
peer_tenant_id: str
```

- *Type:* str

---

##### `peer_vnet_name`<sup>Required</sup> <a name="peer_vnet_name" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetName"></a>

```python
peer_vnet_name: str
```

- *Type:* str

---

##### `peer_vnet_region`<sup>Required</sup> <a name="peer_vnet_region" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.peerVnetRegion"></a>

```python
peer_vnet_region: str
```

- *Type:* str

---

##### `use_remote_gateways`<sup>Required</sup> <a name="use_remote_gateways" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.useRemoteGateways"></a>

```python
use_remote_gateways: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AzurePeeringConnectionConfig <a name="AzurePeeringConnectionConfig" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import azure_peering_connection

azurePeeringConnection.AzurePeeringConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hvn_link: str,
  peering_id: str,
  peer_resource_group_name: str,
  peer_subscription_id: str,
  peer_tenant_id: str,
  peer_vnet_name: str,
  peer_vnet_region: str,
  allow_forwarded_traffic: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: AzurePeeringConnectionTimeouts = None,
  use_remote_gateways: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.hvnLink">hvn_link</a></code> | <code>str</code> | The `self_link` of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peeringId">peering_id</a></code> | <code>str</code> | The ID of the peering connection. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerResourceGroupName">peer_resource_group_name</a></code> | <code>str</code> | The resource group name of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerSubscriptionId">peer_subscription_id</a></code> | <code>str</code> | The subscription ID of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerTenantId">peer_tenant_id</a></code> | <code>str</code> | The tenant ID of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerVnetName">peer_vnet_name</a></code> | <code>str</code> | The name of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerVnetRegion">peer_vnet_region</a></code> | <code>str</code> | The region of the peer VNet in Azure. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.allowForwardedTraffic">allow_forwarded_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the forwarded traffic originating from the peered VNet is allowed in the HVN. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#id AzurePeeringConnection#id}. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.useRemoteGateways">use_remote_gateways</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the HVN should use the gateway of the peered VNet. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hvn_link`<sup>Required</sup> <a name="hvn_link" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.hvnLink"></a>

```python
hvn_link: str
```

- *Type:* str

The `self_link` of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#hvn_link AzurePeeringConnection#hvn_link}

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peeringId"></a>

```python
peering_id: str
```

- *Type:* str

The ID of the peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#peering_id AzurePeeringConnection#peering_id}

---

##### `peer_resource_group_name`<sup>Required</sup> <a name="peer_resource_group_name" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerResourceGroupName"></a>

```python
peer_resource_group_name: str
```

- *Type:* str

The resource group name of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#peer_resource_group_name AzurePeeringConnection#peer_resource_group_name}

---

##### `peer_subscription_id`<sup>Required</sup> <a name="peer_subscription_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerSubscriptionId"></a>

```python
peer_subscription_id: str
```

- *Type:* str

The subscription ID of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#peer_subscription_id AzurePeeringConnection#peer_subscription_id}

---

##### `peer_tenant_id`<sup>Required</sup> <a name="peer_tenant_id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerTenantId"></a>

```python
peer_tenant_id: str
```

- *Type:* str

The tenant ID of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#peer_tenant_id AzurePeeringConnection#peer_tenant_id}

---

##### `peer_vnet_name`<sup>Required</sup> <a name="peer_vnet_name" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerVnetName"></a>

```python
peer_vnet_name: str
```

- *Type:* str

The name of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#peer_vnet_name AzurePeeringConnection#peer_vnet_name}

---

##### `peer_vnet_region`<sup>Required</sup> <a name="peer_vnet_region" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.peerVnetRegion"></a>

```python
peer_vnet_region: str
```

- *Type:* str

The region of the peer VNet in Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#peer_vnet_region AzurePeeringConnection#peer_vnet_region}

---

##### `allow_forwarded_traffic`<sup>Optional</sup> <a name="allow_forwarded_traffic" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.allowForwardedTraffic"></a>

```python
allow_forwarded_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the forwarded traffic originating from the peered VNet is allowed in the HVN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#allow_forwarded_traffic AzurePeeringConnection#allow_forwarded_traffic}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#id AzurePeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.timeouts"></a>

```python
timeouts: AzurePeeringConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#timeouts AzurePeeringConnection#timeouts}

---

##### `use_remote_gateways`<sup>Optional</sup> <a name="use_remote_gateways" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionConfig.property.useRemoteGateways"></a>

```python
use_remote_gateways: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the HVN should use the gateway of the peered VNet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#use_remote_gateways AzurePeeringConnection#use_remote_gateways}

---

### AzurePeeringConnectionTimeouts <a name="AzurePeeringConnectionTimeouts" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import azure_peering_connection

azurePeeringConnection.AzurePeeringConnectionTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#create AzurePeeringConnection#create}. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#default AzurePeeringConnection#default}. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#delete AzurePeeringConnection#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#create AzurePeeringConnection#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#default AzurePeeringConnection#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/azure_peering_connection#delete AzurePeeringConnection#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AzurePeeringConnectionTimeoutsOutputReference <a name="AzurePeeringConnectionTimeoutsOutputReference" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import azure_peering_connection

azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AzurePeeringConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.azurePeeringConnection.AzurePeeringConnectionTimeouts">AzurePeeringConnectionTimeouts</a>]

---



