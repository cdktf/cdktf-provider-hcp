# `dataHcpWaypointAction` Submodule <a name="`dataHcpWaypointAction` Submodule" id="@cdktf/provider-hcp.dataHcpWaypointAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpWaypointAction <a name="DataHcpWaypointAction" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/waypoint_action hcp_waypoint_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_action

dataHcpWaypointAction.DataHcpWaypointAction(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None,
  project_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The ID of the Action. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Action. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the Waypoint Action is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.id"></a>

- *Type:* str

The ID of the Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/waypoint_action#id DataHcpWaypointAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.name"></a>

- *Type:* str

The name of the Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/waypoint_action#name DataHcpWaypointAction#name}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the Waypoint Action is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/waypoint_action#project_id DataHcpWaypointAction#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.resetProjectId"></a>

```python
def reset_project_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataHcpWaypointAction resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_action

dataHcpWaypointAction.DataHcpWaypointAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_action

dataHcpWaypointAction.DataHcpWaypointAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_action

dataHcpWaypointAction.DataHcpWaypointAction.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_action

dataHcpWaypointAction.DataHcpWaypointAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataHcpWaypointAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataHcpWaypointAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataHcpWaypointAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/waypoint_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpWaypointAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.request">request</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference">DataHcpWaypointActionRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.request"></a>

```python
request: DataHcpWaypointActionRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference">DataHcpWaypointActionRequestOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpWaypointActionConfig <a name="DataHcpWaypointActionConfig" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_action

dataHcpWaypointAction.DataHcpWaypointActionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.id">id</a></code> | <code>str</code> | The ID of the Action. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.name">name</a></code> | <code>str</code> | The name of the Action. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the Waypoint Action is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/waypoint_action#id DataHcpWaypointAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/waypoint_action#name DataHcpWaypointAction#name}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the Waypoint Action is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.106.0/docs/data-sources/waypoint_action#project_id DataHcpWaypointAction#project_id}

---

### DataHcpWaypointActionRequest <a name="DataHcpWaypointActionRequest" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_action

dataHcpWaypointAction.DataHcpWaypointActionRequest()
```


### DataHcpWaypointActionRequestCustom <a name="DataHcpWaypointActionRequestCustom" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustom.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_action

dataHcpWaypointAction.DataHcpWaypointActionRequestCustom()
```


## Classes <a name="Classes" id="Classes"></a>

### DataHcpWaypointActionRequestCustomOutputReference <a name="DataHcpWaypointActionRequestCustomOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_action

dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.headers">headers</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustom">DataHcpWaypointActionRequestCustom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.headers"></a>

```python
headers: StringMap
```

- *Type:* cdktf.StringMap

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference.property.internalValue"></a>

```python
internal_value: DataHcpWaypointActionRequestCustom
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustom">DataHcpWaypointActionRequestCustom</a>

---


### DataHcpWaypointActionRequestOutputReference <a name="DataHcpWaypointActionRequestOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_waypoint_action

dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference">DataHcpWaypointActionRequestCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequest">DataHcpWaypointActionRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.custom"></a>

```python
custom: DataHcpWaypointActionRequestCustomOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestCustomOutputReference">DataHcpWaypointActionRequestCustomOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequestOutputReference.property.internalValue"></a>

```python
internal_value: DataHcpWaypointActionRequest
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointAction.DataHcpWaypointActionRequest">DataHcpWaypointActionRequest</a>

---



