# `waypointApplication` Submodule <a name="`waypointApplication` Submodule" id="@cdktf/provider-hcp.waypointApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointApplication <a name="WaypointApplication" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application hcp_waypoint_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application

waypointApplication.WaypointApplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  template_id: str,
  application_input_variables: typing.Union[IResolvable, typing.List[WaypointApplicationApplicationInputVariables]] = None,
  project_id: str = None,
  readme_markdown: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Application. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.templateId">template_id</a></code> | <code>str</code> | ID of the Template this Application is based on. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.applicationInputVariables">application_input_variables</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables">WaypointApplicationApplicationInputVariables</a>]]</code> | Input variables set for the application. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the Waypoint Application is located. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.readmeMarkdown">readme_markdown</a></code> | <code>str</code> | Instructions for using the Application (markdown format supported). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.name"></a>

- *Type:* str

The name of the Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#name WaypointApplication#name}

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.templateId"></a>

- *Type:* str

ID of the Template this Application is based on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#template_id WaypointApplication#template_id}

---

##### `application_input_variables`<sup>Optional</sup> <a name="application_input_variables" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.applicationInputVariables"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables">WaypointApplicationApplicationInputVariables</a>]]

Input variables set for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#application_input_variables WaypointApplication#application_input_variables}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the Waypoint Application is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#project_id WaypointApplication#project_id}

---

##### `readme_markdown`<sup>Optional</sup> <a name="readme_markdown" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.Initializer.parameter.readmeMarkdown"></a>

- *Type:* str

Instructions for using the Application (markdown format supported).

Note: this is a base64 encoded string, and can only be set in configuration after initial creation. The initial version of the README is generated from the README Template from source Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#readme_markdown WaypointApplication#readme_markdown}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.putApplicationInputVariables">put_application_input_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.resetApplicationInputVariables">reset_application_input_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.resetReadmeMarkdown">reset_readme_markdown</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_application_input_variables` <a name="put_application_input_variables" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.putApplicationInputVariables"></a>

```python
def put_application_input_variables(
  value: typing.Union[IResolvable, typing.List[WaypointApplicationApplicationInputVariables]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.putApplicationInputVariables.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables">WaypointApplicationApplicationInputVariables</a>]]

---

##### `reset_application_input_variables` <a name="reset_application_input_variables" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.resetApplicationInputVariables"></a>

```python
def reset_application_input_variables() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_readme_markdown` <a name="reset_readme_markdown" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.resetReadmeMarkdown"></a>

```python
def reset_readme_markdown() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WaypointApplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application

waypointApplication.WaypointApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application

waypointApplication.WaypointApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application

waypointApplication.WaypointApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application

waypointApplication.WaypointApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WaypointApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WaypointApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WaypointApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WaypointApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.applicationInputVariables">application_input_variables</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList">WaypointApplicationApplicationInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.outputValues">output_values</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList">WaypointApplicationOutputValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.templateInputVariables">template_input_variables</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList">WaypointApplicationTemplateInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.applicationInputVariablesInput">application_input_variables_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables">WaypointApplicationApplicationInputVariables</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.readmeMarkdownInput">readme_markdown_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.templateIdInput">template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.readmeMarkdown">readme_markdown</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.templateId">template_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_input_variables`<sup>Required</sup> <a name="application_input_variables" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.applicationInputVariables"></a>

```python
application_input_variables: WaypointApplicationApplicationInputVariablesList
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList">WaypointApplicationApplicationInputVariablesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `output_values`<sup>Required</sup> <a name="output_values" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.outputValues"></a>

```python
output_values: WaypointApplicationOutputValuesList
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList">WaypointApplicationOutputValuesList</a>

---

##### `template_input_variables`<sup>Required</sup> <a name="template_input_variables" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.templateInputVariables"></a>

```python
template_input_variables: WaypointApplicationTemplateInputVariablesList
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList">WaypointApplicationTemplateInputVariablesList</a>

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

##### `application_input_variables_input`<sup>Optional</sup> <a name="application_input_variables_input" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.applicationInputVariablesInput"></a>

```python
application_input_variables_input: typing.Union[IResolvable, typing.List[WaypointApplicationApplicationInputVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables">WaypointApplicationApplicationInputVariables</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `readme_markdown_input`<sup>Optional</sup> <a name="readme_markdown_input" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.readmeMarkdownInput"></a>

```python
readme_markdown_input: str
```

- *Type:* str

---

##### `template_id_input`<sup>Optional</sup> <a name="template_id_input" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.templateIdInput"></a>

```python
template_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `readme_markdown`<sup>Required</sup> <a name="readme_markdown" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.readmeMarkdown"></a>

```python
readme_markdown: str
```

- *Type:* str

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.waypointApplication.WaypointApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointApplicationApplicationInputVariables <a name="WaypointApplicationApplicationInputVariables" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application

waypointApplication.WaypointApplicationApplicationInputVariables(
  name: str,
  value: str,
  variable_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables.property.name">name</a></code> | <code>str</code> | Variable name. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables.property.value">value</a></code> | <code>str</code> | Variable value. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables.property.variableType">variable_type</a></code> | <code>str</code> | Variable type. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables.property.name"></a>

```python
name: str
```

- *Type:* str

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#name WaypointApplication#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables.property.value"></a>

```python
value: str
```

- *Type:* str

Variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#value WaypointApplication#value}

---

##### `variable_type`<sup>Required</sup> <a name="variable_type" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

Variable type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#variable_type WaypointApplication#variable_type}

---

### WaypointApplicationConfig <a name="WaypointApplicationConfig" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application

waypointApplication.WaypointApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  template_id: str,
  application_input_variables: typing.Union[IResolvable, typing.List[WaypointApplicationApplicationInputVariables]] = None,
  project_id: str = None,
  readme_markdown: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.name">name</a></code> | <code>str</code> | The name of the Application. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.templateId">template_id</a></code> | <code>str</code> | ID of the Template this Application is based on. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.applicationInputVariables">application_input_variables</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables">WaypointApplicationApplicationInputVariables</a>]]</code> | Input variables set for the application. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the Waypoint Application is located. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.readmeMarkdown">readme_markdown</a></code> | <code>str</code> | Instructions for using the Application (markdown format supported). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#name WaypointApplication#name}

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

ID of the Template this Application is based on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#template_id WaypointApplication#template_id}

---

##### `application_input_variables`<sup>Optional</sup> <a name="application_input_variables" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.applicationInputVariables"></a>

```python
application_input_variables: typing.Union[IResolvable, typing.List[WaypointApplicationApplicationInputVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables">WaypointApplicationApplicationInputVariables</a>]]

Input variables set for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#application_input_variables WaypointApplication#application_input_variables}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the Waypoint Application is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#project_id WaypointApplication#project_id}

---

##### `readme_markdown`<sup>Optional</sup> <a name="readme_markdown" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationConfig.property.readmeMarkdown"></a>

```python
readme_markdown: str
```

- *Type:* str

Instructions for using the Application (markdown format supported).

Note: this is a base64 encoded string, and can only be set in configuration after initial creation. The initial version of the README is generated from the README Template from source Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#readme_markdown WaypointApplication#readme_markdown}

---

### WaypointApplicationOutputValues <a name="WaypointApplicationOutputValues" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValues.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application

waypointApplication.WaypointApplicationOutputValues()
```


### WaypointApplicationTemplateInputVariables <a name="WaypointApplicationTemplateInputVariables" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariables.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application

waypointApplication.WaypointApplicationTemplateInputVariables(
  name: str,
  value: str,
  variable_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariables.property.name">name</a></code> | <code>str</code> | Variable name. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariables.property.value">value</a></code> | <code>str</code> | Variable value. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariables.property.variableType">variable_type</a></code> | <code>str</code> | Variable type. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariables.property.name"></a>

```python
name: str
```

- *Type:* str

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#name WaypointApplication#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariables.property.value"></a>

```python
value: str
```

- *Type:* str

Variable value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#value WaypointApplication#value}

---

##### `variable_type`<sup>Optional</sup> <a name="variable_type" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariables.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

Variable type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/resources/waypoint_application#variable_type WaypointApplication#variable_type}

---

## Classes <a name="Classes" id="Classes"></a>

### WaypointApplicationApplicationInputVariablesList <a name="WaypointApplicationApplicationInputVariablesList" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application

waypointApplication.WaypointApplicationApplicationInputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WaypointApplicationApplicationInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables">WaypointApplicationApplicationInputVariables</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WaypointApplicationApplicationInputVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables">WaypointApplicationApplicationInputVariables</a>]]

---


### WaypointApplicationApplicationInputVariablesOutputReference <a name="WaypointApplicationApplicationInputVariablesOutputReference" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application

waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.variableTypeInput">variable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.variableType">variable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables">WaypointApplicationApplicationInputVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `variable_type_input`<sup>Optional</sup> <a name="variable_type_input" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.variableTypeInput"></a>

```python
variable_type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `variable_type`<sup>Required</sup> <a name="variable_type" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WaypointApplicationApplicationInputVariables]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationApplicationInputVariables">WaypointApplicationApplicationInputVariables</a>]

---


### WaypointApplicationOutputValuesList <a name="WaypointApplicationOutputValuesList" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application

waypointApplication.WaypointApplicationOutputValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WaypointApplicationOutputValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WaypointApplicationOutputValuesOutputReference <a name="WaypointApplicationOutputValuesOutputReference" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application

waypointApplication.WaypointApplicationOutputValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.property.sensitive">sensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValues">WaypointApplicationOutputValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.property.sensitive"></a>

```python
sensitive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValuesOutputReference.property.internalValue"></a>

```python
internal_value: WaypointApplicationOutputValues
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationOutputValues">WaypointApplicationOutputValues</a>

---


### WaypointApplicationTemplateInputVariablesList <a name="WaypointApplicationTemplateInputVariablesList" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application

waypointApplication.WaypointApplicationTemplateInputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WaypointApplicationTemplateInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariables">WaypointApplicationTemplateInputVariables</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WaypointApplicationTemplateInputVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariables">WaypointApplicationTemplateInputVariables</a>]]

---


### WaypointApplicationTemplateInputVariablesOutputReference <a name="WaypointApplicationTemplateInputVariablesOutputReference" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application

waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.resetVariableType">reset_variable_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_variable_type` <a name="reset_variable_type" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.resetVariableType"></a>

```python
def reset_variable_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.variableTypeInput">variable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.variableType">variable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariables">WaypointApplicationTemplateInputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `variable_type_input`<sup>Optional</sup> <a name="variable_type_input" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.variableTypeInput"></a>

```python
variable_type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `variable_type`<sup>Required</sup> <a name="variable_type" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: WaypointApplicationTemplateInputVariables
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplication.WaypointApplicationTemplateInputVariables">WaypointApplicationTemplateInputVariables</a>

---



