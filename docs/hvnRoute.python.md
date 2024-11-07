# `hvnRoute` Submodule <a name="`hvnRoute` Submodule" id="@cdktf/provider-hcp.hvnRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HvnRoute <a name="HvnRoute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route hcp_hvn_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_route

hvnRoute.HvnRoute(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_cidr: str,
  hvn_link: str,
  hvn_route_id: str,
  target_link: str,
  azure_config: HvnRouteAzureConfig = None,
  id: str = None,
  project_id: str = None,
  timeouts: HvnRouteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.destinationCidr">destination_cidr</a></code> | <code>str</code> | The destination CIDR of the HVN route. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.hvnLink">hvn_link</a></code> | <code>str</code> | The `self_link` of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.hvnRouteId">hvn_route_id</a></code> | <code>str</code> | The ID of the HVN route. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.targetLink">target_link</a></code> | <code>str</code> | A unique URL identifying the target of the HVN route. Examples of the target: [`aws_network_peering`](aws_network_peering.md), [`aws_transit_gateway_attachment`](aws_transit_gateway_attachment.md). |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.azureConfig">azure_config</a></code> | <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfig">HvnRouteAzureConfig</a></code> | azure_config block. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#id HvnRoute#id}. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the HVN route is located. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts">HvnRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_cidr`<sup>Required</sup> <a name="destination_cidr" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.destinationCidr"></a>

- *Type:* str

The destination CIDR of the HVN route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#destination_cidr HvnRoute#destination_cidr}

---

##### `hvn_link`<sup>Required</sup> <a name="hvn_link" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.hvnLink"></a>

- *Type:* str

The `self_link` of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#hvn_link HvnRoute#hvn_link}

---

##### `hvn_route_id`<sup>Required</sup> <a name="hvn_route_id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.hvnRouteId"></a>

- *Type:* str

The ID of the HVN route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#hvn_route_id HvnRoute#hvn_route_id}

---

##### `target_link`<sup>Required</sup> <a name="target_link" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.targetLink"></a>

- *Type:* str

A unique URL identifying the target of the HVN route. Examples of the target: [`aws_network_peering`](aws_network_peering.md), [`aws_transit_gateway_attachment`](aws_transit_gateway_attachment.md).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#target_link HvnRoute#target_link}

---

##### `azure_config`<sup>Optional</sup> <a name="azure_config" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.azureConfig"></a>

- *Type:* <a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfig">HvnRouteAzureConfig</a>

azure_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#azure_config HvnRoute#azure_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#id HvnRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the HVN route is located.

Always matches the project ID in `hvn_link`. Setting this attribute is deprecated, but it will remain usable in read-only form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#project_id HvnRoute#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts">HvnRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#timeouts HvnRoute#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.putAzureConfig">put_azure_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.resetAzureConfig">reset_azure_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_azure_config` <a name="put_azure_config" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.putAzureConfig"></a>

```python
def put_azure_config(
  next_hop_type: str,
  next_hop_ip_address: str = None
) -> None
```

###### `next_hop_type`<sup>Required</sup> <a name="next_hop_type" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.putAzureConfig.parameter.nextHopType"></a>

- *Type:* str

The type of Azure hop the packet should be sent to.

Valid options for Next Hop Type - `VIRTUAL_APPLIANCE` or `VIRTUAL_NETWORK_GATEWAY`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#next_hop_type HvnRoute#next_hop_type}

---

###### `next_hop_ip_address`<sup>Optional</sup> <a name="next_hop_ip_address" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.putAzureConfig.parameter.nextHopIpAddress"></a>

- *Type:* str

Contains the IP address packets should be forwarded to.

Next hop values are only allowed in routes where the next hop type is VIRTUAL_APPLIANCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#next_hop_ip_address HvnRoute#next_hop_ip_address}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#create HvnRoute#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#default HvnRoute#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#delete HvnRoute#delete}.

---

##### `reset_azure_config` <a name="reset_azure_config" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.resetAzureConfig"></a>

```python
def reset_azure_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HvnRoute resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_route

hvnRoute.HvnRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_route

hvnRoute.HvnRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_route

hvnRoute.HvnRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_route

hvnRoute.HvnRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HvnRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HvnRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HvnRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HvnRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.azureConfig">azure_config</a></code> | <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference">HvnRouteAzureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference">HvnRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.azureConfigInput">azure_config_input</a></code> | <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfig">HvnRouteAzureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.destinationCidrInput">destination_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.hvnLinkInput">hvn_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.hvnRouteIdInput">hvn_route_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.targetLinkInput">target_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts">HvnRouteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.destinationCidr">destination_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.hvnLink">hvn_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.hvnRouteId">hvn_route_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.targetLink">target_link</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `azure_config`<sup>Required</sup> <a name="azure_config" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.azureConfig"></a>

```python
azure_config: HvnRouteAzureConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference">HvnRouteAzureConfigOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.timeouts"></a>

```python
timeouts: HvnRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference">HvnRouteTimeoutsOutputReference</a>

---

##### `azure_config_input`<sup>Optional</sup> <a name="azure_config_input" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.azureConfigInput"></a>

```python
azure_config_input: HvnRouteAzureConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfig">HvnRouteAzureConfig</a>

---

##### `destination_cidr_input`<sup>Optional</sup> <a name="destination_cidr_input" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.destinationCidrInput"></a>

```python
destination_cidr_input: str
```

- *Type:* str

---

##### `hvn_link_input`<sup>Optional</sup> <a name="hvn_link_input" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.hvnLinkInput"></a>

```python
hvn_link_input: str
```

- *Type:* str

---

##### `hvn_route_id_input`<sup>Optional</sup> <a name="hvn_route_id_input" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.hvnRouteIdInput"></a>

```python
hvn_route_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `target_link_input`<sup>Optional</sup> <a name="target_link_input" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.targetLinkInput"></a>

```python
target_link_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, HvnRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts">HvnRouteTimeouts</a>]

---

##### `destination_cidr`<sup>Required</sup> <a name="destination_cidr" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.destinationCidr"></a>

```python
destination_cidr: str
```

- *Type:* str

---

##### `hvn_link`<sup>Required</sup> <a name="hvn_link" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.hvnLink"></a>

```python
hvn_link: str
```

- *Type:* str

---

##### `hvn_route_id`<sup>Required</sup> <a name="hvn_route_id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.hvnRouteId"></a>

```python
hvn_route_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `target_link`<sup>Required</sup> <a name="target_link" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.targetLink"></a>

```python
target_link: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.hvnRoute.HvnRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HvnRouteAzureConfig <a name="HvnRouteAzureConfig" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_route

hvnRoute.HvnRouteAzureConfig(
  next_hop_type: str,
  next_hop_ip_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfig.property.nextHopType">next_hop_type</a></code> | <code>str</code> | The type of Azure hop the packet should be sent to. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfig.property.nextHopIpAddress">next_hop_ip_address</a></code> | <code>str</code> | Contains the IP address packets should be forwarded to. |

---

##### `next_hop_type`<sup>Required</sup> <a name="next_hop_type" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfig.property.nextHopType"></a>

```python
next_hop_type: str
```

- *Type:* str

The type of Azure hop the packet should be sent to.

Valid options for Next Hop Type - `VIRTUAL_APPLIANCE` or `VIRTUAL_NETWORK_GATEWAY`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#next_hop_type HvnRoute#next_hop_type}

---

##### `next_hop_ip_address`<sup>Optional</sup> <a name="next_hop_ip_address" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfig.property.nextHopIpAddress"></a>

```python
next_hop_ip_address: str
```

- *Type:* str

Contains the IP address packets should be forwarded to.

Next hop values are only allowed in routes where the next hop type is VIRTUAL_APPLIANCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#next_hop_ip_address HvnRoute#next_hop_ip_address}

---

### HvnRouteConfig <a name="HvnRouteConfig" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_route

hvnRoute.HvnRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_cidr: str,
  hvn_link: str,
  hvn_route_id: str,
  target_link: str,
  azure_config: HvnRouteAzureConfig = None,
  id: str = None,
  project_id: str = None,
  timeouts: HvnRouteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.destinationCidr">destination_cidr</a></code> | <code>str</code> | The destination CIDR of the HVN route. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.hvnLink">hvn_link</a></code> | <code>str</code> | The `self_link` of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.hvnRouteId">hvn_route_id</a></code> | <code>str</code> | The ID of the HVN route. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.targetLink">target_link</a></code> | <code>str</code> | A unique URL identifying the target of the HVN route. Examples of the target: [`aws_network_peering`](aws_network_peering.md), [`aws_transit_gateway_attachment`](aws_transit_gateway_attachment.md). |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.azureConfig">azure_config</a></code> | <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfig">HvnRouteAzureConfig</a></code> | azure_config block. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#id HvnRoute#id}. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the HVN route is located. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts">HvnRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_cidr`<sup>Required</sup> <a name="destination_cidr" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.destinationCidr"></a>

```python
destination_cidr: str
```

- *Type:* str

The destination CIDR of the HVN route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#destination_cidr HvnRoute#destination_cidr}

---

##### `hvn_link`<sup>Required</sup> <a name="hvn_link" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.hvnLink"></a>

```python
hvn_link: str
```

- *Type:* str

The `self_link` of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#hvn_link HvnRoute#hvn_link}

---

##### `hvn_route_id`<sup>Required</sup> <a name="hvn_route_id" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.hvnRouteId"></a>

```python
hvn_route_id: str
```

- *Type:* str

The ID of the HVN route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#hvn_route_id HvnRoute#hvn_route_id}

---

##### `target_link`<sup>Required</sup> <a name="target_link" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.targetLink"></a>

```python
target_link: str
```

- *Type:* str

A unique URL identifying the target of the HVN route. Examples of the target: [`aws_network_peering`](aws_network_peering.md), [`aws_transit_gateway_attachment`](aws_transit_gateway_attachment.md).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#target_link HvnRoute#target_link}

---

##### `azure_config`<sup>Optional</sup> <a name="azure_config" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.azureConfig"></a>

```python
azure_config: HvnRouteAzureConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfig">HvnRouteAzureConfig</a>

azure_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#azure_config HvnRoute#azure_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#id HvnRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the HVN route is located.

Always matches the project ID in `hvn_link`. Setting this attribute is deprecated, but it will remain usable in read-only form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#project_id HvnRoute#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.hvnRoute.HvnRouteConfig.property.timeouts"></a>

```python
timeouts: HvnRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts">HvnRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#timeouts HvnRoute#timeouts}

---

### HvnRouteTimeouts <a name="HvnRouteTimeouts" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_route

hvnRoute.HvnRouteTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#create HvnRoute#create}. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#default HvnRoute#default}. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#delete HvnRoute#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#create HvnRoute#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#default HvnRoute#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/hvn_route#delete HvnRoute#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### HvnRouteAzureConfigOutputReference <a name="HvnRouteAzureConfigOutputReference" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_route

hvnRoute.HvnRouteAzureConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.resetNextHopIpAddress">reset_next_hop_ip_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_next_hop_ip_address` <a name="reset_next_hop_ip_address" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.resetNextHopIpAddress"></a>

```python
def reset_next_hop_ip_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.property.nextHopIpAddressInput">next_hop_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.property.nextHopTypeInput">next_hop_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.property.nextHopIpAddress">next_hop_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.property.nextHopType">next_hop_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfig">HvnRouteAzureConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `next_hop_ip_address_input`<sup>Optional</sup> <a name="next_hop_ip_address_input" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.property.nextHopIpAddressInput"></a>

```python
next_hop_ip_address_input: str
```

- *Type:* str

---

##### `next_hop_type_input`<sup>Optional</sup> <a name="next_hop_type_input" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.property.nextHopTypeInput"></a>

```python
next_hop_type_input: str
```

- *Type:* str

---

##### `next_hop_ip_address`<sup>Required</sup> <a name="next_hop_ip_address" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.property.nextHopIpAddress"></a>

```python
next_hop_ip_address: str
```

- *Type:* str

---

##### `next_hop_type`<sup>Required</sup> <a name="next_hop_type" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.property.nextHopType"></a>

```python
next_hop_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfigOutputReference.property.internalValue"></a>

```python
internal_value: HvnRouteAzureConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteAzureConfig">HvnRouteAzureConfig</a>

---


### HvnRouteTimeoutsOutputReference <a name="HvnRouteTimeoutsOutputReference" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_route

hvnRoute.HvnRouteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts">HvnRouteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.hvnRoute.HvnRouteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HvnRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.hvnRoute.HvnRouteTimeouts">HvnRouteTimeouts</a>]

---



