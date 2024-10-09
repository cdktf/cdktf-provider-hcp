# `hvnPeeringConnection` Submodule <a name="`hvnPeeringConnection` Submodule" id="@cdktf/provider-hcp.hvnPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HvnPeeringConnection <a name="HvnPeeringConnection" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection hcp_hvn_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_peering_connection

hvnPeeringConnection.HvnPeeringConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hvn1: str,
  hvn2: str,
  id: str = None,
  project_id: str = None,
  timeouts: HvnPeeringConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.hvn1">hvn1</a></code> | <code>str</code> | The unique URL of one of the HVNs being peered. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.hvn2">hvn2</a></code> | <code>str</code> | The unique URL of one of the HVNs being peered. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#id HvnPeeringConnection#id}. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where HVN peering connection is located. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts">HvnPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hvn1`<sup>Required</sup> <a name="hvn1" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.hvn1"></a>

- *Type:* str

The unique URL of one of the HVNs being peered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#hvn_1 HvnPeeringConnection#hvn_1}

---

##### `hvn2`<sup>Required</sup> <a name="hvn2" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.hvn2"></a>

- *Type:* str

The unique URL of one of the HVNs being peered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#hvn_2 HvnPeeringConnection#hvn_2}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#id HvnPeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where HVN peering connection is located.

Always matches hvn_1's project ID. Setting this attribute is deprecated, but it will remain usable in read-only form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#project_id HvnPeeringConnection#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts">HvnPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#timeouts HvnPeeringConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#create HvnPeeringConnection#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#default HvnPeeringConnection#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#delete HvnPeeringConnection#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HvnPeeringConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_peering_connection

hvnPeeringConnection.HvnPeeringConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_peering_connection

hvnPeeringConnection.HvnPeeringConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_peering_connection

hvnPeeringConnection.HvnPeeringConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_peering_connection

hvnPeeringConnection.HvnPeeringConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HvnPeeringConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HvnPeeringConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HvnPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HvnPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.peeringId">peering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference">HvnPeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn1Input">hvn1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn2Input">hvn2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts">HvnPeeringConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn1">hvn1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn2">hvn2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.peeringId"></a>

```python
peering_id: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.timeouts"></a>

```python
timeouts: HvnPeeringConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference">HvnPeeringConnectionTimeoutsOutputReference</a>

---

##### `hvn1_input`<sup>Optional</sup> <a name="hvn1_input" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn1Input"></a>

```python
hvn1_input: str
```

- *Type:* str

---

##### `hvn2_input`<sup>Optional</sup> <a name="hvn2_input" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn2Input"></a>

```python
hvn2_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, HvnPeeringConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts">HvnPeeringConnectionTimeouts</a>]

---

##### `hvn1`<sup>Required</sup> <a name="hvn1" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn1"></a>

```python
hvn1: str
```

- *Type:* str

---

##### `hvn2`<sup>Required</sup> <a name="hvn2" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.hvn2"></a>

```python
hvn2: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HvnPeeringConnectionConfig <a name="HvnPeeringConnectionConfig" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_peering_connection

hvnPeeringConnection.HvnPeeringConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hvn1: str,
  hvn2: str,
  id: str = None,
  project_id: str = None,
  timeouts: HvnPeeringConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.hvn1">hvn1</a></code> | <code>str</code> | The unique URL of one of the HVNs being peered. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.hvn2">hvn2</a></code> | <code>str</code> | The unique URL of one of the HVNs being peered. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#id HvnPeeringConnection#id}. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where HVN peering connection is located. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts">HvnPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hvn1`<sup>Required</sup> <a name="hvn1" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.hvn1"></a>

```python
hvn1: str
```

- *Type:* str

The unique URL of one of the HVNs being peered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#hvn_1 HvnPeeringConnection#hvn_1}

---

##### `hvn2`<sup>Required</sup> <a name="hvn2" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.hvn2"></a>

```python
hvn2: str
```

- *Type:* str

The unique URL of one of the HVNs being peered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#hvn_2 HvnPeeringConnection#hvn_2}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#id HvnPeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where HVN peering connection is located.

Always matches hvn_1's project ID. Setting this attribute is deprecated, but it will remain usable in read-only form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#project_id HvnPeeringConnection#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionConfig.property.timeouts"></a>

```python
timeouts: HvnPeeringConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts">HvnPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#timeouts HvnPeeringConnection#timeouts}

---

### HvnPeeringConnectionTimeouts <a name="HvnPeeringConnectionTimeouts" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_peering_connection

hvnPeeringConnection.HvnPeeringConnectionTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#create HvnPeeringConnection#create}. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#default HvnPeeringConnection#default}. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#delete HvnPeeringConnection#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#create HvnPeeringConnection#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#default HvnPeeringConnection#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/hvn_peering_connection#delete HvnPeeringConnection#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### HvnPeeringConnectionTimeoutsOutputReference <a name="HvnPeeringConnectionTimeoutsOutputReference" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import hvn_peering_connection

hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts">HvnPeeringConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HvnPeeringConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.hvnPeeringConnection.HvnPeeringConnectionTimeouts">HvnPeeringConnectionTimeouts</a>]

---



