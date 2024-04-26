# `consulSnapshot` Submodule <a name="`consulSnapshot` Submodule" id="@cdktf/provider-hcp.consulSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulSnapshot <a name="ConsulSnapshot" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot hcp_consul_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import consul_snapshot

consulSnapshot.ConsulSnapshot(
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
  snapshot_name: str,
  id: str = None,
  project_id: str = None,
  timeouts: ConsulSnapshotTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.snapshotName">snapshot_name</a></code> | <code>str</code> | The name of the snapshot. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#id ConsulSnapshot#id}. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the HCP Consul cluster is located. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts">ConsulSnapshotTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.clusterId"></a>

- *Type:* str

The ID of the HCP Consul cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#cluster_id ConsulSnapshot#cluster_id}

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.snapshotName"></a>

- *Type:* str

The name of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#snapshot_name ConsulSnapshot#snapshot_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#id ConsulSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the HCP Consul cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#project_id ConsulSnapshot#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts">ConsulSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#timeouts ConsulSnapshot#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#create ConsulSnapshot#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#default ConsulSnapshot#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#delete ConsulSnapshot#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#update ConsulSnapshot#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ConsulSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import consul_snapshot

consulSnapshot.ConsulSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import consul_snapshot

consulSnapshot.ConsulSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import consul_snapshot

consulSnapshot.ConsulSnapshot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import consul_snapshot

consulSnapshot.ConsulSnapshot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ConsulSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConsulSnapshot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConsulSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConsulSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.consulVersion">consul_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.restoredAt">restored_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference">ConsulSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.snapshotNameInput">snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts">ConsulSnapshotTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.snapshotName">snapshot_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `consul_version`<sup>Required</sup> <a name="consul_version" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.consulVersion"></a>

```python
consul_version: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `restored_at`<sup>Required</sup> <a name="restored_at" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.restoredAt"></a>

```python
restored_at: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.timeouts"></a>

```python
timeouts: ConsulSnapshotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference">ConsulSnapshotTimeoutsOutputReference</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `snapshot_name_input`<sup>Optional</sup> <a name="snapshot_name_input" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.snapshotNameInput"></a>

```python
snapshot_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ConsulSnapshotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts">ConsulSnapshotTimeouts</a>]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulSnapshotConfig <a name="ConsulSnapshotConfig" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import consul_snapshot

consulSnapshot.ConsulSnapshotConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  snapshot_name: str,
  id: str = None,
  project_id: str = None,
  timeouts: ConsulSnapshotTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the HCP Consul cluster. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.snapshotName">snapshot_name</a></code> | <code>str</code> | The name of the snapshot. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#id ConsulSnapshot#id}. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the HCP Consul cluster is located. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts">ConsulSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The ID of the HCP Consul cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#cluster_id ConsulSnapshot#cluster_id}

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

The name of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#snapshot_name ConsulSnapshot#snapshot_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#id ConsulSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the HCP Consul cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#project_id ConsulSnapshot#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotConfig.property.timeouts"></a>

```python
timeouts: ConsulSnapshotTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts">ConsulSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#timeouts ConsulSnapshot#timeouts}

---

### ConsulSnapshotTimeouts <a name="ConsulSnapshotTimeouts" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import consul_snapshot

consulSnapshot.ConsulSnapshotTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#create ConsulSnapshot#create}. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#default ConsulSnapshot#default}. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#delete ConsulSnapshot#delete}. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#update ConsulSnapshot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#create ConsulSnapshot#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#default ConsulSnapshot#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#delete ConsulSnapshot#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.87.1/docs/resources/consul_snapshot#update ConsulSnapshot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConsulSnapshotTimeoutsOutputReference <a name="ConsulSnapshotTimeoutsOutputReference" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import consul_snapshot

consulSnapshot.ConsulSnapshotTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts">ConsulSnapshotTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConsulSnapshotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.consulSnapshot.ConsulSnapshotTimeouts">ConsulSnapshotTimeouts</a>]

---



